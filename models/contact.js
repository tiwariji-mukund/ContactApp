// steps to create db schema

// import mongoose
const mongoose = require('mongoose');

// create schema
const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }
});

// create the model 
const Contact = mongoose.model('Contact', contactSchema);

// export the module
module.exports = Contact;

// after that import this file in the index.js file 