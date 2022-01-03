const mongoose = require('mongoose')
// const DB_URI = `${process.env.MONGODB}`;



//Database connection
mongoose.connect(process.env.MONGODB_URI || DB_URI,
{   useNewUrlParser: true,
    useUnifiedTopology: true});
const connection = mongoose.connection



module.exports = connection