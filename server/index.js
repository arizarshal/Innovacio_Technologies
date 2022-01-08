// require("dotenv").config();
// ADMIN_BRO
const path = require('path');
const express = require('express');
const AdminBro = require('admin-bro');
const cors = require('cors');
const morgan = require('morgan');
const AdminBroMongoose = require('@admin-bro/mongoose');
const AdminBroExpress = require('@admin-bro/express');

// FORM
const layout = require('express-layout');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('express-flash');
const helmet = require('helmet');

// IMAGE UPLOAD

const app = express();
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());
const publicPath = path.join(__dirname, './public')
app.use('/public', express.static(publicPath))


// Database
const connection = require('./config/db.config');
connection.once('open', ()=> {
  console.log('Database connected Successfully')
});
connection.on('error',()=>console.log('Error'));


//Admin Bro
// REQUIRING MODELS
const User = require('./models/User')
const Emp = require('./models/Emp')
const Blog = require('./models/Blog')
const Form = require('./models/Form')


const canModifyUsers = ({ currentAdmin }) => currentAdmin && currentAdmin.role === 'admin'
const canEditEmp = ({ currentAdmin, record }) => {
  return currentAdmin && (
    currentAdmin.role === 'admin'
  )
}

// Adminbro Options
AdminBro.registerAdapter(AdminBroMongoose)
const AdminBroOptions = {
  resources: 
  [Form,Blog, {
    resource: Emp,
    options: {
      properties: {
        ownerId: { isVisible: { edit: false, show: true, list: true, filter: true } }
      },
      actions: {
        edit: { isAccessible: canEditEmp },
        delete: { isAccessible: canEditEmp },
        new: { isAccessible: canEditEmp },
      },
   }},
   {
    resource: User,  
    options: {
      properties: {
        encryptedPassword: { isVisible: false },
        password: {
          type: 'string',
          isVisible: {
            list: false, edit: true, filter: false, show: false,
          },
        },
      },
      actions: {
        new: {
          before: async (request) => {
            if(request.payload.record.password) {
              request.payload.record = {
                ...request.payload.record,
                encryptedPassword: await           bcrypt.hash(request.payload.record.password, 10),
                password: undefined,
              }
            }
            return request
          },
        },
        edit: { isAccessible: canModifyUsers },
        delete: { isAccessible: canModifyUsers },
        new: { isAccessible: canModifyUsers },
      }
    }
  }],
}
const adminBro = new AdminBro(AdminBroOptions)
const router = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
  authenticate: async (email, password) => {
    const user = await User.findOne({ email })
      if (user) {
        if (password === user.encryptedPassword) {
          return user
        }
      }
    return false
  },
  cookiePassword: 'session Key',
})


app.use(adminBro.options.rootPath, router)




// FORM ------------------------------------------------------------------------------
const routes = require('./routes');


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const middlewares = [
  layout(),
  express.static(path.join(__dirname, 'public')),
  bodyParser.urlencoded({ extended: true }),
  cookieParser(),
  session({
    secret: 'super-secret-key',
    key: 'super-secret-cookie',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60000 },
  }),
  flash(),
  helmet(),
];
app.use(middlewares);
app.use('/', routes);


app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// FOR PRODUCTION ONLY
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(`${__dirname}/../frontend/build`))
// }


const port = process.env.PORT || 5000;
app.listen(port, console.log(`Listening on port ${port}...`));

