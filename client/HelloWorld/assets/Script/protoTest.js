var ProtoBuf = require("protobuf");

var ProtoControl = {
  //#region Example of manipulating proto struct
    loginProtoTest: function() {
        cc.loader.loadRes("Login", function(err, msg){
            if (err) {  
                cc.error(err.message || err);  
                return;  
            }  
            cc.log(msg);
          
            let Build = ProtoBuf.loadProto(msg);
            
            if (Build) {
              let LoginModule = Build.build("Login");

              if (LoginModule) {
                let loginModule = new LoginModule();  
    
                //  setters
                loginModule.set("cmd", "login");
                loginModule.set("name", "saint");
                loginModule.set("pw", "123456");
    
                let buffer = LoginModule.encode(loginModule).toArrayBuffer();    //  serialize
                let message = LoginModule.decode(buffer);    //  deserialize
                
                //  getters
                console.log(message.get("cmd"));
                console.log(message.get("name"));
                console.log(message.get("pw"));

                console.log("After deserializing:");
                console.log(message);  
              } else{  
                console.log("LoginModule is null");  
              }  
            } else{  
              console.log("Build Faild!");
            }
        });
    },
    //#endregion

    buildProtoModule: function(protoFileName, callback) {
      cc.loader.loadRes(protoFileName, function(err, msg) {
        if (err) {  
            cc.error(err.message || err);
            return;  
        }
      
        let Build = ProtoBuf.loadProto(msg);
        if (Build) {
            let ProtoModule = Build.build(protoFileName);
            
            //  once the build is successful, do the callback
            if (callback) {
              callback(ProtoModule);
            } 
        } else {
          console.log("Build failed...");
        }
      });
    },

    //  decode buffer(stream bytes) which is sent from server, to msg(data structure)
    decodeDataFromServer: function(dataFromServer, callback) {
      //  callback on proto file has been loaded
      var decodeBuffer = function(ProtoModule) {
        let msg = ProtoModule.decode(dataFromServer.buffer);
        
        if (callback) {
          callback(msg);
        }
      };

      this.buildProtoModule(dataFromServer.fn, decodeBuffer);
    },

    //  encode specified msg which will be sent to server, to buffer
    encodeUserInfo: function(userID, userName, userEmail, callback) {
        var setUserInfo = function(UserInfoModule) {
          let userInfoModule = new UserInfoModule();

          userInfoModule.set("userID", userID);
          userInfoModule.set("userName", userName);
          userInfoModule.set("userEmail", userEmail);

          let msg = userInfoModule;
          let buffer = UserInfoModule.encode(msg).toArrayBuffer();

          if (callback) {
            callback(msg, buffer);
          }
        };

        this.buildProtoModule('Test.userInfo', setUserInfo); 
    }
  };

  module.exports = ProtoControl;
