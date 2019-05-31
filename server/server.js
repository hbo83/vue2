const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require("mongoose");

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors())

app.get('/posts', (req, res) => {
  res.send(
    [{
      title: "Hello World!",
      description: "Hi there! How are you?"
    }]
  )
})

// ---mongoose---
mongoose.connect('mongodb://localhost:27017/mongooseTest', { useNewUrlParser: true });
const Contact = require('./Contact.model');
//test spojeni s DB
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('spojeno k DB')
});
//test spojeni s DB


app.get('/contacts', function(req, res){
  Contact.find({}).exec(function(err, contacts){
    if(err){
      res.send('error has occured');
    } else {
      res.json(contacts);
    }
  })
})

app.post('/contact', function(req, res){
  var newContact = new Contact();

  newContact.firstName = req.body.firstName;
  newContact.lastName = req.body.lastName;
  newContact.phone = req.body.phone;

  newContact.save(function(err, contact){
    if(err){
      res.send('error saving contact')
    } else {
      console.log(contact);
      res.send(contact);
    }
  });
});

app.put('/contact/:id', function(req, res){
  Contact.findOneAndUpdate({
    _id: req.params.id },
    { $set: { phone: req.body.phone }},
    { upsert: true },
    function( err, newContact ){
      if(err){
        console.log(err);
      } else {
        console.log(newContact);
        res.send(newContact);
      }
  });
});

app.delete('/contact/:id', function(req, res){
  Contact.findOneAndRemove({
    _id: req.params.id
  }, function(err, contact){
    if(err){
      console.log(err);
    } else {
      console.log(contact);
      res.send(contact);
    }

  })
})
app.get('/', function(req, res){
  res.send('hi')
});

// app.get('/logins', function(req, res){
//   console.log('tu mas loginy');
//   res.send('tu mas loginy')
//   console.log(Login.find().where('mail').all());
// });




app.listen(process.env.PORT || 8081)

console.log('server running on port 8081')
