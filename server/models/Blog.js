const mongoose = require('mongoose');

// making a Schema 
const BlogSchema = new mongoose.Schema({
    iid: {
      type: Number,
      required: [true, 'An article must have a serial number from 01 to 10'],
      unique: true,
      max: 20
    },
    image: {
      type: String,
      required: [true, 'An article must have an address link of an image '],
      trim: true
    },
    title: {
      type: String,
      required: [true, 'An article must have a title'],
      unique: false,
      trim: true
    },
    description1: {
        type: String,
        required: [true, 'An article must have a description'],
    },
    title2: {
      type: String,
      required: false,
    },
    description2: {
      type: String,
      required: [true, 'An article must have a description'],
    },
    title3: {
      type: String,
      required: false,
    },
    description3: {
      type: String,
      required: [true, 'An article must have a description'],
    },
    title4: {
      type: String,
      required: false,
    },
    description4: {
      type: String,
      required: [true, 'An article must have a description'],
    },
    createdAt: {
      type: Date,
      default: Date.now()
  },
});



module.exports = mongoose.model('Blog', BlogSchema )