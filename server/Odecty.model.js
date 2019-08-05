var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OdectySchema = new Schema({
  id: mongoose.Schema.Types.ObjectId,
  userGlobal: String,
  dateWaterCold: String,
  dateWaterHot: String,
  dateHeating: String,
  name: String,
  waterColdValue: String,
  waterHotValue: String,
  heatingValue: String
});

module.exports = mongoose.model('Odecty', OdectySchema);