const express = require('express');
const path = require('path');
const port = 8000;

// import the db
const db = require('./config/mongoose')
const app = express();

// import module/model
const Contact = require('./models/contact');

let contactList = [];

// setting up the view engine or template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
// setting middlewares
app.use(express.urlencoded()); // default middlewares

// including static files
app.use(express.static('assets'));

// Controller
// new way to write as Model do not accept the previous version of code
app.get('/', async (req, res) => {
    // try this code if there is no error
    try {
        // search through the whole contact list
        const contacts = await Contact.find({});
        // render the home page
        return res.render('home', { 
            title: "Contact App",
            contact_list: contacts
        });
    }
    // if there is an error come to this part 
    catch (err) {
      console.log(`Error in retrieving contacts: ${err}`);
      return;
    }
  });
    

app.post('/create-contact', async(req, res) => {
    // contactList.push(req.body);
    // return res.redirect('back');
    // if no error come to this part of code
    try{
        // create the contact
        const newContact = await Contact.create({
            name: req.body.name,
            phone: req.body.phone
        }); 
        // print it on the console and return back to the home page
        console.log("New Contact created");
        return res.redirect('back');
    }
    // if there is any error jump here
    catch(err){
        // print the error in the console
        console.log(`Error in creating the contact ${err}`);
        return;
    }
    
});

app.get('/delete-contact/', async(req,res) => {
    try{
        let id = req.query.id;

        let contactIndex = await Contact.findByIdAndDelete(id);
        console.log("Contact deleted Successfully");
        return res.redirect('back');
    }
    catch(err){
        console.log(`Error in deleting the object from the database, ${err}`);
        return;
    }
    
})


// start the server
app.listen(port, (err) => {
    if(err){
        console.log("Error in running server", err);
        return;
    }
    console.log(`Server is running fine on port: http://localhost:${port}`);
})