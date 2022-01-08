const mongoose = require('mongoose')
const DB_URI = "mongodb+srv://ariz:amazon123@projectxcluster.1tlld.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"


//Database connection
mongoose.connect(process.env.MONGODB_URI || DB_URI,
{   useNewUrlParser: true,
    useUnifiedTopology: true});
const connection = mongoose.connection


module.exports = connection
