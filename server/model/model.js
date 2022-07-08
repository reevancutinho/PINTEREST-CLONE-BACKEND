const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    title : {
        type : String,
        required: true
    },
    description : {
        type: String,
        required: true,
    },
    destination : String,
    pin_size : String,
    image : {
        type: String,
        required: true,
    }
    
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;