var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FaultSchema = new Schema({
  userGlobal: String,
  fault: String,
  partOfHouse: String,
  hurry: String
});

module.exports = mongoose.model('Fault', FaultSchema);