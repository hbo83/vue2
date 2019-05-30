const express = require('express')
const app = express()
const bodyParser = require('body-parser')
// const cors = require('cors')
// const morgan = require('morgan')
const mongoose = require("mongoose");

// app.use(morgan('combined'))
app.use(bodyParser.json())
// app.use(cors())


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

app.get('/', function(req, res){
  res.send('hi')
});



app.listen(process.env.PORT || 8081)

console.log('server running on port 8081')
