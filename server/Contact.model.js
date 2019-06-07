var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ContactSchema = new Schema({
  profession: String,
  name: String,
  phone: String,
  email: String
});

module.exports = mongoose.model('Contact', ContactSchema);