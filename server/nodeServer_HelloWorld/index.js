//#region  Refs Config
var http = require('http');
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var protobuf = require("protobufjs");

server.listen(3000);
//#endregion

//  References of generated .js files from .proto files
var UserInfo = require("./protos/Test.userInfo.js")["Test"]["userInfo"];

//  list of names of proto files
var fn_userInfo = "Test.userInfo";

//  message setters
var userInfo = new UserInfo({
    "userID": 88168,
    "userName": "EasonZhong"
});

app.get('/', function(req, res){
    res.send("hello world");
});

io.on('connection', function(socket) {
    //  send buffer to client on connected
    socket.emit('userInfo', {fn: fn_userInfo, buffer: UserInfo.encode(userInfo).finish()});

    socket.on('userInfo', function(buffer) {
        console.log(UserInfo.decode(buffer));
    });
});

console.log('--- server is running ---' + guid());

function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}