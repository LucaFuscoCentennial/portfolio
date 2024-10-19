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

//update user
router.route('/api/contacts/:id').put(contactsCntrl.updateContact)

module.exports = router;
