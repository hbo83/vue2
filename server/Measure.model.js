var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MeasureSchema = new Schema({
  commodity: String,
  date: String,
  value: String
});

module.exports = mongoose.model('Measure', MeasureSchema);
