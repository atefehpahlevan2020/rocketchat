const router = require('express').Router()
const roomController = require('./../controllers/roomController')


router.post('/api/v1/users.create',roomController.createRoom)

module.exports = router

