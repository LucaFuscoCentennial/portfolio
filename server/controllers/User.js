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
//select all users 
const findUsers = async(req,res)=>{
    try{
        let users = await User.find();
        res.json(users);
    }
    catch(err){
        return res.status(400).json({
            error:"Error Message"
        })
    }
}
//find user by id
const userByID = async(req,res)=>{
    try{
        const user = await User.findById(req.params.id);
        if(!user)
            return res.status('400').json({
        error:"User doesn't exist"
        })

        res.json(user)

    }
    catch(err){
        return res.status(400).json({
            error: err.message || "Error Message"
        })
    }
}

//Update user by id
const updateUser = async(req,res) => {
    try{
        //new : true makes it show the update change in user document
        let user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true})
       res.status(200).json({
        updated: user
       })
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
        let user = await User.deleteMany();
        res.json(user)
    }
    catch(err)
    {
    return res.send(400).json({
            error: err.message || "Error Message"
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
module.exports = {createUser, userByID, findUsers, removeUser, updateUser, removeUserById}