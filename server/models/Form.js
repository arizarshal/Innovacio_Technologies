const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    message: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
    }
})

const formModel = mongoose.model('form', formSchema);

module.exports = formModel