const router = require('express').Router()
const userController = require('./../controllers/userController')


router.post('/api/v1/users.create',userController.createUser)

module.exports = router