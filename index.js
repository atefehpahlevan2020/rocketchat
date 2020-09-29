const express = require('express')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')
const server = app.listen(process.env.HOST,() => {
  console.log('server listening')
})


function RocketChatApi(protocol,host,username,password) {
  let baseURL = ""
  if (arguments.length === 1) {
    protocol = arguments[0].protocol || process.env.PROTOCOL
    host = arguments[0].host || process.env.HOST
    username = arguments[0].username || ""
    password = arguments[0].password || ""
    baseURL = (arguments[0].baseURL || "").replace(/^\/+|\/+$/g, "")
}
let restClient = (protocol,host,baseURL + "/api/v1/")

this.users = new (require("./api/users"))(restClient)
this.restClient = restClient
}    

exports.RocketChatApi = RocketChatApi