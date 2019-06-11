var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ImperfectionSchema = new Schema({
  imperfection: String,
  created: String,
  hurry: String
});

module.exports = mongoose.model('Imperfection', ImperfectionSchema);