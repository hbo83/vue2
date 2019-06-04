const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const fs = require('fs');
const mongoose = require("mongoose");
const multer = require('multer');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname )
  }
})

var upload = multer({ storage: storage })
// const upload = multer({ dest: 'uploads/' });

const imgPath = 'photo/sc.png'

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors())
app.use('/uploads', express.static('uploads'))

app.get('/posts', (req, res) => {
  res.send(
    [{
      title: "Hello World!",
      description: "Hi there! How are you?"
    }]
  )
})

// ---mongoose---!!! nevim jestli byt porad pripojeden k DB nebo pri kazdym dotazu se pripojit zvlast
mongoose.connect('mongodb://localhost:27017/mongooseTest', { useNewUrlParser: true });
const Contact = require('./Contact.model');
const Owner = require('./Owner.model');
const File = require('./File.model');
//test spojeni s DB
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('spojeno k DB');

  });
//test spojeni s DB

//contacts
app.get('/contacts', function(req, res){
  Contact.find({}).exec(function(err, contacts){
    if(err){
      res.send('error has occured');
    } else {
      res.json(contacts);
    }
  })
})

app.post('/img', upload.single('productImage'), ( req, res, next) => {
  console.log(req.file);
  const file = new File({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    price: req.body.price,
    productImage: req.file.path
  });
  file.save()
  .then( result => {
    console.log(result);
    res.status(201).json({
      message: 'Create product successfully',
      createdProduct: {
        name: result.name,
        price: result.price
      }
    });
  });
})

app.get('/getimg', (req, res, next) => {
  File.find()
  .select('name price _id')
  .exec()
  .then( docs => {
    return {
      name: doc.name,
      price: doc.price,
      _id: doc._id,
      request: {
        type: 'GET',
        url: 'http://localhost:3000/products/' + doc._id
      }
}
  });
  res.status(200).json( response );
});


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

//owners
app.get('/owners', function(req, res){
  Owner.find({}).exec(function(err, owners){
    if(err){
      res.send('error has occured');
    } else {
      res.json(owners);
    }
  })
})

app.post('/owner', function(req, res){
  var newOwner = new Owner();

  newOwner.firstName = req.body.firstName;
  newOwner.lastName = req.body.lastName;
  newOwner.unit = req.body.unit;
  newOwner.part = req.body.part;

  newOwner.save(function(err, owner){
    if(err){
      res.send('error saving owner')
    } else {
      console.log(owner);
      res.send(owner);
    }
  });
});

app.put('/owner/:id', function(req, res){
  Owner.findOneAndUpdate({
    _id: req.params.id },
    { $set: { phone: req.body.unit }},
    { upsert: true },
    function( err, newOwner ){
      if(err){
        console.log(err);
      } else {
        console.log(newOwner);
        res.send(newOwner);
      }
  });
});

app.delete('/owner/:id', function(req, res){
  Owner.findOneAndRemove({
    _id: req.params.id
  }, function(err, owner){
    if(err){
      console.log(err);
    } else {
      console.log(owner);
      res.send(owner);
    }
  })
})


// app.get('/', function(req, res){
//   res.send('hi')
// });

// app.post('/file', function(req, res){
//   res.send('data');
//   console.log("data")
// });


// app.get('/logins', function(req, res){
//   console.log('tu mas loginy');
//   res.send('tu mas loginy')
//   console.log(Login.find().where('mail').all());
// });



//   app.post('/file', upload.array('image', 5), (req, res, next) => {
//   const images = req.files.map((file) => {
//   return {
//     filename: file.filename,
//     originalname: file.originalname
//   }
// })
// console.log("data");
// Image.insertMany(images, (err, result) => {
//   if (err) return res.sendStatus(404)
//   res.json(result)
// })
// })

// app.post('/file',function(req,res){
//  var newItem = new File();
//  newItem.img.data = fs.readFileSync(req.files.userPhoto.path)
//  newItem.img.contentType = 'image/png';
//  newItem.save();
// });



app.listen(process.env.PORT || 8081)

console.log('server running on port 8081')
