var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ContactSchema = new Schema({
  id: mongoose.Schema.Types.ObjectId,
  userGlobal: String,
  profession: String,
  name: String,
  phone: String,
  email: String
});

module.exports = mongoose.model('Contact', ContactSchema);