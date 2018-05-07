var netConfig = require("NetConfig");
var protoControl = require("protoTest");

var NetControl = {
    _socket: {},

    connect: function() {
        this._socket = io(netConfig.host + ':' + netConfig.port);
        
        this._socket.on('connect', () => {
            console.log("--- connected to server ----");
        });

        //  receive data from server
        this._socket.on('userInfo', function(data) {
            var getUserInfo = function(receivedUserInfo) {
                console.log("--- received from server: ---");
                console.log(receivedUserInfo);
            };
            protoControl.decodeDataFromServer(data, getUserInfo);
        });
    },

    sendUserInfo: function(userID, userName, userEmail) {
        var self = this;
        protoControl.encodeUserInfo(userID, userName, userEmail, 
            function(msg, buffer) {
                console.log("--- send to server: ---");
                console.log(msg);
                self._socket.emit('userInfo', buffer);
            }
        );
    },
};

module.exports = NetControl;