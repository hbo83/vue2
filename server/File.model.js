var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const FileSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String },
    price: { type: Number },
    productImage: { type: String, required: true },
})
module.exports = mongoose.model('File', FileSchema);
