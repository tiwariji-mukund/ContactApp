const express = require('express');
const path = require('path');
const port = 8000;

const app = express();
let contactList = [
    {
        name: 'Mukund',
        phone: 9451721374
    },
    {
        name: 'Gargi',
        phone: 9580578185
    },
    {
        name: 'Shivangi',
        phone: 8427185274
    }
]

// setting up the view engine or template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
// setting middlewares
app.use(express.urlencoded()); // default middlewares

// including static files
app.use(express.static('assets'));

// Controller
app.get('/', (req,res) => {
    return res.render('home', {
        title: "Contact App",
        contact_list: contactList
        // contact_list is used for communication b/w server and ejs file
    });
});

app.get('/about', (req,res) => {
    return res.render('about', {
        title: "About Us",
        myName: 'Mukund'
    });
});

app.post('/create-contact', (req, res) => {
    contactList.push(req.body);
    return res.redirect('back');
});



// start the server
app.listen(port, (err) => {
    if(err){
        console.log("Error in running server", err);
        return;
    }
    console.log(`Server is running fine on port: http:localhost:${port}`);
})