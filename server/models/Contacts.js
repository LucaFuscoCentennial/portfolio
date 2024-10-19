const mongoose = require('mongoose');


const ContactsSchema = new mongoose.Schema({
    firstname:{
        type:String,
        trim:true,
        required:'First name is required'
    },
    lastname:{
        type:String,
        trim:true,
        required:'Last name is required'
    },
    email:{
        type:String,
        trim:true,
        unique:'Email already exists',
        match:[/.+\@.+\..+/, 'Please enter valid email'],
        required:'Email is required'
    },
});

  
module.exports = mongoose.model('Contacts',ContactsSchema);