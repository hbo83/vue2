var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OwnerSchema = new Schema({
  firstName: String,
  lastName: String,
  unit: String,
  part: String
});

module.exports = mongoose.model('Owner', OwnerSchema);
