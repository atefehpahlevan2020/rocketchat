const router = require('express').Router()
const chatController = require('./../controllers/chatController')


router.post('/api/v1/chat.postMessage',chatController.createChat)

module.exports = router

