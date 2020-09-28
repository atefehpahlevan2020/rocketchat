const config = require('./config')

function RocketChatClient(protocol, host, port, username, password, onConnected) {
    let basepath = "";
        
    if (arguments.length === 1) {
        host = arguments[0].host || "http://192.168.100.171/";
        // port = arguments[0].port || 3000;
        username = arguments[0].username || "";
        password = arguments[0].password || "";
        onConnected = arguments[0].onConnected;
        basepath = (arguments[0].basepath || "").replace(/^\/+|\/+$/g, "");
        protocol = arguments[0].protocol || "http";
    }
    
    onConnected = onConnected || function() {};
    var restClient = new net.RestClient(protocol, host, port, basepath + "/api/v1/");
    var wsClient = new net.WsClient("ws", host, port, basepath + "/websocket");

    this.authentication = new (require("./api/authentication"))(restClient);

    this.users = new (require("./api/users"))(restClient);

    this.restClient = restClient;
    this.wsClient = wsClient;

    var self = this;

    if (username && password) {
        this.authentication.login(username, password, function (err, body) {
            if (err) {
                return onConnected(err, null);
            }

            let userId = body.data.userId;

            restClient.setHeader("X-Auth-Token", body.data.authToken);
            restClient.setHeader("X-User-Id", userId);

            self.realtime.login(username, password, function (err) {
                if (err) {
                    return onConnected(err, null);
                }

                onConnected(null, { userId });
            });
        });
    } else {
        onConnected(null, null);
    }
}

exports.RocketChatClient = RocketChatClient;
