const User = require('../models/User.js');

//Post method to create user
const createUser = async(req,res) => {
    const user = new User(req.body)
    console.log(req.body)
    try{
        //save user to database
        await user.save()
        return res.status(200).json({
            message:"Added Successfully"
        })
    }
    catch(err)
    {
        return res.status(400).json({
            error: err.message || "Error Message"
        })
    }
}
//update 
const listAllUsers = async(req,res)=>{
    try{
        let users = await User.find().select('name email updated created');
        res.json(users);
    }
    catch(err){
        return res.status(400).json({
            error:"Error Message"
        })
    }
}
//find user by id
const userByID = async(req,res,next,id)=>{
    try{
        let user = await User.findById(id);
        if(!user)
            return res.status('400').json({
        error:"User doesn't exist"
        })
    req.profile = user
    next()
    }
    catch(err){
        return res.status(400).json({
            error:"Error Message"
        })
    }
}

const read = (req,res) =>{
    req.profile.hashed_password = undefined
    req.profile.salt = undefined
    return res.json(req.profile)
}

//Update user by id
const updateUser = async(req,res) => {
    try{
        let user = req.profile
        user = extend(user,req.body)
        user.updated = Date.now()
        await user.save()

        res.json(user)
    }
    catch(err)
    {
    return res.status(400).json({
            error:"Error Message"
        })   
    }
}
//Remove all users
const removeUser = async(req,res) => {
    try{
        const user = await Contact.findById(req.params.id);
        let deletedUser = await user.deleteOne()
        res.json(deletedUser)
    }
    catch(err)
    {
    return res.send(400).json({
            error:"Error Message"
        })   
    }
}

//Remove all users
const removeUserById = async(req,res) => {
    try{
        const user = await Contact.findById(req.params.id);
        let deletedUser = await user.deleteOne()
        res.json(deletedUser)
    }
    catch(err)
    {
    return res.send(400).json({
            error:"Error Message"
        })   
    }
}
//export methods to router
module.exports = {createUser, userByID, read, listAllUsers, removeUser, updateUser, removeUserById}