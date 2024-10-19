const express = require('express')
const contactsCntrl = require('../controllers/Contacts.js')
const router = express.Router()

router.route('/api/contacts/:id')
//post new contact
router.route('/api/contacts').post(contactsCntrl.createContact)
//get all contacts
router.route('/api/contacts').get(contactsCntrl.findContacts)

//get contact by id
router.route('/api/contacts/:id').get(contactsCntrl.findContactById)

//update user by id
router.route('/api/contacts/:id').put(contactsCntrl.updateContact)

//delete users
router.route('/api/contacts/').delete(contactsCntrl.removeContact)


//delete user by id
router.route('/api/contacts/:id').delete(contactsCntrl.removeContactById)


module.exports = router;
