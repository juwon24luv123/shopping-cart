var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    imagePath: {type: String,},
    title:  {type: String, },
    description: {type: String,},
    price: {type: Number,},
    date: {type: Date , default: Date.now()}
});

module.exports = mongoose.model('Product', schema);