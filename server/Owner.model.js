var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OwnerSchema = new Schema({
  flatNumber: String,
  name: String,
  address: String,
  part: String,
  phone: String,
  email: String
});

module.exports = mongoose.model('Owner', OwnerSchema);