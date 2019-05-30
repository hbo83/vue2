var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ContactSchema = new Schema({
  firstName: String,
  lastName: String,
  phone: Number
});

module.exports = mongoose.model('Contact', ContactSchema);
