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
        netControl.sendUserInfo(312, "ZhongYichen", "zycwhisper@gmail.com");
    }
});