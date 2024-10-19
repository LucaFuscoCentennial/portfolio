const express = require('express')
const userCntrl = require('../controllers/User.js')
const router = express.Router()
//setup id
router.route('/api/users/:id')

//create a user
router.route('/api/users').post(userCntrl.createUser)
//get all users
router.route('/api/users').get(userCntrl.findUsers)
//get user by id
router.route('/api/users/:id').get(userCntrl.userByID)
//update user
router.route('/api/users/:id').put(userCntrl.updateUser)
//remove user
router.route('/api/users/:id').delete(userCntrl.removeUser)
//remove user by id
router.route('/api/users/:id').delete(userCntrl.removeUserById)
module.exports = router;
