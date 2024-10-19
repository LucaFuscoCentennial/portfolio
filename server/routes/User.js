const express = require('express')
const userCntrl = require('../controllers/User.js')
const router = express.Router()
//setup id
router.route('/api/users/:userId')

//create a user
router.route('/api/users').post(userCntrl.createUser)
//get all users
router.route('/api/users').get(userCntrl.listAllUsers)
//get user by id
router.param('userId',userCntrl.userByID)
router.route('/api/users/:userId').get(userCntrl.read)
//update user
router.route('/api/users/:userId').put(userCntrl.updateUser)
//remove user
router.route('/api/users/:userId').delete(userCntrl.removeUser)
//remove user by id
router.route('/api/users/:userId').delete(userCntrl.removeUserById)
module.exports = router;
