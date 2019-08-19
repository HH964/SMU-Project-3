const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create Schema
const ItemSchema = new Schema({
    name:{
        type: String,
        minlength: 3,
        required: true
    },
    brand:{
        type: String,
        minlength: 5,
    },
    img:{
        type: String,
        required: true
    },
    price:{
        type: String,
        minlength: 3,
    },
    catergory:{
        type: String,
        required: true
    },
    subcategory:{
        type: String
    },
    date:{
        type: Date,
        default: Date.now
    }
});
module.exports = Item = mongoose.model('item', ItemSchema);