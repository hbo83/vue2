var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RevisionSchema = new Schema({
  revTitle: String,
  revLast: String,
  revNext: String
});

module.exports = mongoose.model('Revision', RevisionSchema);
