const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require("mongoose");

app.use(morgan('combined'))
app.use(bodyParser.json())
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
const Contact2 = require('./Contact.model');
//test spojeni s DB
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('spojeno k DB')
});
//test spojeni s DB


app.get('/contacts', function(req, res){
  Contact2.find({}).exec(function(err, contacts){
    if(err){
      res.send('error has occured');
    } else {
      res.json(contacts);
    }
  })
})
//schema, kde definujeme, ze kolekce kocky bude min jeden klic typ String. Od schema se vse odviji
    var contactsSchema = new mongoose.Schema({
      firstname: String,
      lastname: String,
      phone: Number
    });

//toto schema zkompilujeme do modelu. Model je trida s kterou konstruujeme dokument. V tomto pripade se vzdy vykonstruuje dokument deklarovany podle schematu
var Contacts = mongoose.model('Contacts', contactsSchema);
//nyni vytvorime dokument podle modelu Kitten
    // var martin = new Contacts({ firstname: 'Popo' });
    // console.log(martin.name); // 'Silence'
//takto zobrazime vsechny instance tridy kitten
Contacts.find(function (err, contacts) {
  if (err) return console.error(err);
  console.log(contacts);
})

//ulozim do dokumentu kitten kocku silence
    // martin.save().then(() => console.log('meow'));

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
