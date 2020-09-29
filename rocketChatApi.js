require('dotenv').config()

function RocketChatApi(protocol,host,username,password) {
  let baseURL = ""
  if (arguments.length === 1) {
    protocol = arguments[0].protocol || process.env.PROTOCOL
    host = arguments[0].host || process.env.HOST
    username = arguments[0].username || ""
    password = arguments[0].password || ""
    // baseURL = (arguments[0].baseURL || "").replace(/^\/+|\/+$/g, "")
  }
}    

exports.RocketChatApi = RocketChatApi

