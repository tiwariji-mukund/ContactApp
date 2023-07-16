// require or imprted the library
const mongoose = require('mongoose');

// connect with the db
mongoose.connect('mongodb://127.0.0.1:27017/contacts_list_db');

// check if connection is successfull
const db = mongoose.connection;

// if error in connecting
db.on('error', console.error.bind(console, 'error in connecting with db'));

// if connection is successfully print the message
db.once('open', () => {
    console.log('Successfully connected to the db, MongDB');
})

// Make sure MongoDB in task manager is running before this step else MongoDB will not be connected

/*
    to start MongoDB in task manager click on task manager
    go to services, last option
    scroll to m and find MongoDB
    check its status
    if it is stopped, right click on it and select the start option
    if it 
*/