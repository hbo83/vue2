const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const fs = require('fs');
const mongoose = require("mongoose");
const multer = require('multer');
var http = require('http');

const app = express();

// ---mongoose---!!! nevim jestli byt porad pripojeden k DB nebo pri kazdym dotazu se pripojit zvlast
mongoose.connect('mongodb://localhost:27017/mongooseTest', {
  useNewUrlParser: true
});
const Contact = require('./Contact.model');
const Owner = require('./Owner.model');
const File = require('./File.model');
const Meeting = require('./Meeting.model');
const Revision = require('./Revision.model');
const Measure = require('./Measure.model');
const Imperfection = require('./Imperfection.model');
//test spojeni s DB
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() { //test spojeni s DB
  console.log('spojeno k DB');
});

var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  }
})

// const fileFilter = (req, res, cb ) => {
//   //reject a file
//   if ( file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
//     cb(new Error('message'), true);
//   } else
//   cb(null, false);
// }
var upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  }
})
// const upload = multer({ dest: 'uploads/' });

// const imgPath = 'photo/sc.png'

// app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors())
app.use('/uploads', express.static('uploads'));
// app.use("/public", express.static(path.join(__dirname, 'public')));
app.get('/posts', (req, res) => {
  res.send(
    [{
      title: "Hello World!",
      description: "Hi there! How are you?"
    }]
  )
})



//gets
app.get('/owners', function(req, res) {
  Owner.find({}).exec(function(err, owners) {
    if (err) {
      res.send('error has occured');
    } else {
      res.json(owners);
    }
  })
})

app.get('/contacts', function(req, res) {
  Contact.find({}).exec(function(err, contacts) {
    if (err) {
      res.send('error has occured');
    } else {
      res.json(contacts);
    }
  })
})

app.get('/meetings', function(req, res) {
  Meeting.find({}).exec(function(err, meetings) {
    if (err) {
      res.send('error has occured');
    } else {
      res.json(meetings);
    }
  })
})

app.get('/revisions', function(req, res) {
  Revision.find({}).exec(function(err, revision) {
    if (err) {
      res.send('error has occured');
    } else {
      res.json(revision);
    }
  })
})

app.get('/measures', function(req, res) {
  Measure.find({}).exec(function(err, measure) {
    if (err) {
      res.send('error has occured');
    } else {
      res.json(measure);
    }
  })
})

app.get('/imperfections', function(req, res) {
  Imperfection.find({}).exec(function(err, imperfection) {
    if (err) {
      res.send('error has occured');
    } else {
      res.json(imperfection);
    }
  })
})
//file upload
app.post('/img', upload.single('productImage'), (req, res, next) => {
  console.log(req.file);
  const file = new File({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    modified: new Date().toISOString(),
    productImage: req.file.path
  });
  file.save()
    .then(result => {
      console.log(result);
      res.status(201).json({
        message: 'Create product successfully',
        createdProduct: {
          name: result.name,
          modified: result.modified
        }
      });
    });
})

app.get('/getimg', function(req, res) {
  File.find({}).exec(function(err, files) {
    if (err) {
      res.send('error has occured');
    } else {
      console.log(files);
      res.json(files);
    }
  })
})

app.get('/getimgmulti:productId', (req, res, next) => {
  File.find()
    .select('name modified _id productImage')
    .exec()
    .then(docs => {
      const response = {
        count: docs.length,
        files: docs.map(doc => {
          return {
            name: doc.name,
            modified: doc.modified,
            productImage: doc.productImage,
            _id: doc._id,
            request: {
              type: 'GET',
              url: 'http://localhost:8081/files/' + doc._id
            }
          }
        })
      }
      res.status(200).json(response);
    });
});

app.get('/getimg:productId', (req, res, next) => {
  const id = req.params.producdId;
  File.find(id)
    .select('name modified _id productImage')
    .exec()
    .then(doc => {
      console.log("from database", doc);
      if (doc) {
        res.status(200).json({
          product: doc,
          request: {
            type: 'GET',
            url: 'http://localhost:8081/files/'
          }
        })
      }
      return {
        name: doc.name,
        modified: doc.modified,
        _id: doc._id,
        request: {
          type: 'GET',
          url: 'http://localhost:8081/files/' + doc._id
        }
      }
    });
  res.status(200).json(response);
});

//posts
app.post('/contact', function(req, res) {
  var newContact = new Contact();

  newContact.profession = req.body.profession;
  newContact.name = req.body.name;
  newContact.phone = req.body.phone;
  newContact.email = req.body.email;

  newContact.save(function(err, contact) {
    if (err) {
      res.send('error saving contact')
    } else {
      console.log(contact);
      res.send(contact);
    }
  });
});

app.post('/meeting', function(req, res) {
  var newMeeting = new Meeting();

  newMeeting.theme = req.body.theme;
  newMeeting.created = req.body.created;
  newMeeting.date = req.body.date;

  newMeeting.save(function(err, meeting) {
    if (err) {
      res.send('error saving meeting')
    } else {
      console.log(meeting);
      res.send(meeting);
    }
  });
});

app.post('/revision', function(req, res) {
  var newRevision = new Revision();

  newRevision.revTitle = req.body.revTitle;
  newRevision.revLast = req.body.revLast;
  newRevision.revNext = req.body.revLast;

  newRevision.save(function(err, revision) {
    if (err) {
      res.send('error saving revision')
    } else {
      console.log(revision);
      res.send(revision);
    }
  });
});

app.post('/measure', function(req, res) {
  var newMeasure = new Measure();

  newMeasure.commodity = req.body.commodity;
  newMeasure.date = req.body.date;
  newMeasure.value = req.body.value;

  newMeasure.save(function(err, measure) {
    if (err) {
      res.send('error saving measure')
    } else {
      console.log(measure);
      res.send(measure);
    }
  });
});

app.post('/imperfection', function(req, res) {
  var newImperfection = new Imperfection();

  newImperfection.imperfection = req.body.imperfection;
  newImperfection.created = req.body.created;
  newImperfection.hurry = req.body.hurry;

  newImperfection.save(function(err, imperfection) {
    if (err) {
      res.send('error saving imperfection')
    } else {
      console.log(imperfection);
      res.send(imperfection);
    }
  });
});

app.put('/contact/:id', function(req, res) {
  Contact.findOneAndUpdate({
      _id: req.params.id
    }, {
      $set: {
        phone: req.body.phone
      }
    }, {
      upsert: true
    },
    function(err, newContact) {
      if (err) {
        console.log(err);
      } else {
        console.log(newContact);
        res.send(newContact);
      }
    });
});

// app.delete('/contact/:id', (req, res, next) => {
//   const id = req.params._id
//   Contacts.remove({
//       _id: _id
//     })
//     .exec()
//     .then(result => {
//       res.status(200).json(result);
//     }).catch(err => {
//       console.log(err);
//       res.status(500).json({
//         error: err
//       });
//     });
// });

//deletes
app.delete('/contact/:id', function(req, res) {
  Contact.findOneAndRemove({
    _id: req.params.id
  }, function(err, contact) {
    if (err) {
      console.log(err);
    } else {
      console.log(contact);
      res.send(contact);
    }
  })
})

//puts
app.put('/owner/:id', function(req, res) {
  Owner.findOneAndUpdate({
      _id: req.params.id
    }, {
      $set: {
        phone: req.body.unit
      }
    }, {
      upsert: true
    },
    function(err, newOwner) {
      if (err) {
        console.log(err);
      } else {
        console.log(newOwner);
        res.send(newOwner);
      }
    });
});

app.post('/owner', function(req, res) {
  var newOwner = new Owner();

  newOwner.firstName = req.body.firstName;
  newOwner.lastName = req.body.lastName;
  newOwner.unit = req.body.unit;
  newOwner.part = req.body.part;

  newOwner.save(function(err, owner) {
    if (err) {
      res.send('error saving owner')
    } else {
      console.log(owner);
      res.send(owner);
    }
  });
});

app.put('/owner/:id', function(req, res) {
  Owner.findOneAndUpdate({
      _id: req.params.id
    }, {
      $set: {
        phone: req.body.unit
      }
    }, {
      upsert: true
    },
    function(err, newOwner) {
      if (err) {
        console.log(err);
      } else {
        console.log(newOwner);
        res.send(newOwner);
      }
    });
});

app.delete('/owner/:id', function(req, res) {
  Owner.findOneAndRemove({
    _id: req.params.id
  }, function(err, owner) {
    if (err) {
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