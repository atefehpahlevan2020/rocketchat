require('dotenv').config()
require('./api/net')

function RocketChatApi(protocol,host,username,password) {
  let basepath = ""
  if (arguments.length === 1) {
    protocol = arguments[0].protocol || process.env.PROTOCOL
    host = arguments[0].host || process.env.HOST
    username = arguments[0].username || ""
    password = arguments[0].password || ""
    basepath = (arguments[0].basepath || "").replace(/^\/+|\/+$/g, "")
}

let restClient = new net.RestClient(protocol,host,basepath + "/api/v1/")

this.authentication = new (require("./api/authentication"))(restClient)
this.users = new (require("./api/users"))(restClient)
this.restClient = restClient
}    

exports.RocketChatApi = RocketChatApi

