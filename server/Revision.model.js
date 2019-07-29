var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RevisionSchema = new Schema({
  revTitle: String,
  revLast: String,
  revNext: String,
  revLast1: String,
  revLast2: String,
  revLast3: String,
  revLast4: String
});

module.exports = mongoose.model('Revision', RevisionSchema);