var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OdectySchema = new Schema({
  id: mongoose.Schema.Types.ObjectId,
  dateWater: String,
  dateHeating: String,
  name: String,
  waterValue: String,
  heatingValue: String
});

module.exports = mongoose.model('Odecty', OdectySchema);