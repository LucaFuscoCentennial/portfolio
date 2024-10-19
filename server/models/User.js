const mongoose = require('mongoose');
//User Schema
const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:'Name is required'
    },
    email:{
        type:String,
        trim:true,
        unique:'Email already exists',
        match:[/.+\@.+\..+/, 'Please enter valid email'],
        required:'Email is required'
    },
    created:
    {
        type:Date,
        default:Date.now
    },
    updated:
    {
        type:Date,
        default:Date.now
    },
    password:
    {
        type:String,
        required:'Password is required'
    },
});
module.exports = mongoose.model('User',UserSchema);