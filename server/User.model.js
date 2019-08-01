var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  id: mongoose.Schema.Types.ObjectId,
  email: String,
  password: String
});

module.exports = mongoose.model('User', UserSchema);