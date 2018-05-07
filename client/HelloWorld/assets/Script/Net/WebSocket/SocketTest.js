var netControl = require("NetControl");

cc.Class({
    extends: cc.Component,

    start: function() {
        this.connectToServer();
    },

    connectToServer: function() {
        netControl.connect();
    },

    sendUserInfoToServer: function() {
        netControl.sendUserInfo(47, "Agent-47", "Codename47@Hitman.com");
    }
});