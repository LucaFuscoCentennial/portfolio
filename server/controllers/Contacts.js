const Contact = require('../models/Contacts.js');

//create a new Contact
const createContact = async(req,res) => {
    const contact = new Contact(req.body)
    console.log(req.body)
    try{
        //save new contact to database
        await contact.save()
        //status 200 means successful
        return res.status(200).json({
            message:"Added new Contact Successfully"
        })
    }
    //if there is an error. Catch it
    catch(err)
    {
        //res 400 means error
        return res.status(400).json({
            error: err.message || "We cannot POST your Contact method"
        })
    }
}
//find all contacts
const findContacts = async(req, res) =>{
    let contacts = await Contact.find();
    res.json(contacts)
}

//find all contacts by id
const findContactById = async(req, res) =>{
    const contact = await Contact.findById(req.params.id);
   try{
    //turn it into json
    res.json(contact)
    }catch(err){
    return res.status(400).json({
        error:"error"
        })   }
   
}
//update contact by id
const updateContact = async(req, res)=>{
    try{
       let contact = await Contact.findByIdAndUpdate(req.params.id, req.body, {new: true})
       res.status(200).json({
        updated: contact
       })
    }catch(err){
       return res.status(400).json({
            error: err.message || "error"
            })   }

}

//remove all contacts
const removeContact = async(req, res)=>{
    try{
        let contacts = await Contact.deleteMany();
        res.json(contacts)
   
    }catch(err){
        return res.status(400).json({
            error: err.message || "error"
            }) 
    }
}



//remove contacts by id
const removeContactById = async(req, res)=>{
    try{
        
        const contacts = await Contact.findById(req.params.id);

        console.log(contacts)
        let deletedContact = await contacts.deleteOne()
        res.json(deletedContact)
    }catch(err){
        return res.status(400).json({
            error: err.message || "error"
            }) 
    }
}


module.exports = {createContact, findContacts, findContactById, updateContact, removeContact, removeContactById}