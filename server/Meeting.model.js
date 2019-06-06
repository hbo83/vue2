var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MeetingSchema = new Schema({
  theme: String,
  created: String,
  date: String
});

module.exports = mongoose.model('Meeting', MeetingSchema);
