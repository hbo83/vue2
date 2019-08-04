var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const FileSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  userGlobal: String,
  name: {
    type: String
  },
  modified: {
    type: String
  },
  productImage: {
    type: String,
    required: true
  },
})
module.exports = mongoose.model('File', FileSchema);