var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OdectySchema = new Schema({
  id: mongoose.Schema.Types.ObjectId,
  name: String,
  waterValue: String,
  electricityValue: String,
  gasValue: String
});

module.exports = mongoose.model('Odecty', OdectySchema);