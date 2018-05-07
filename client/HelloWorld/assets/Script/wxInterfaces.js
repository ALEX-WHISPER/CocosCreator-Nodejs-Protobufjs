cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
        },
        
        text: 'Hello, World!'
    },

    // use this for initialization
    onLoad: function () {
        // if (!this.avatarSprite.spriteFrame) {
        //     this.avatarSprite.spriteFrame = cc.find('Canvas/cocos').getComponent(cc.Sprite).spriteFrame;
        // } else {
        //     console.log(this.avatarSprite.spriteFrame);
        // }

        // this.userAuthorize();
        // this.userLogin();
    },

    //  预授权
    userAuthorize: function() {
        wx.authorize({
            scope: 'scope.userInfo',    //  申请权限：用户信息(头像、昵称)
            success: function() {
                console.log('authorize: success');
            },
            fail: function() {
                console.log('authorize: failed');
            }
        });
    },

    //  登录
    userLogin: function() {
        wx.login({
            success: function(res) {
                if (res.code) {
                  console.log("login success, server handling...");
                } else {
                  console.log("login failed: " + res.errMsg);
                }
            }
        });
    },

    //  分享(转发)
    userShare: function() {
        wx.shareAppMessage({
            title: 'Share HelloWorld',
            success: function() {
                console.log("share success");
            }, 
            fail: function(res) {
                console.log("share failed: " + res);
            }
        });
    },

    //  获取用户公开信息
    getUserInfo: function() {
        wx.getUserInfo({
            withCredentials: true,

            success: function(res) {
                this.userInfo = res.userInfo;
                var nickName = this.userInfo.nickName;
                var language = this.userInfo.language;
                var avatarUrl = this.userInfo.avatarUrl;
                var gender = this.userInfo.gender;
                var country = this.userInfo.country;
                var province = this.userInfo.province;
                var city = this.userInfo.city;

                var _picUrl = avatarUrl;
                cc.loader.load({url:_picUrl, type:"png"},function (err_, tex_) {
                     if (err_) {
                        cc.error("ResMgr.loadImage load  image failed: ", err_, ", url: ", _picUrl);
                        return;
                    }
                    if (!(tex_ instanceof cc.Texture2D)) {
                        cc.error("ResMgr.loadImage jpg image is not instance of Texture2D", typeof(tex_));
                        return;
                    }
                    tex_.width = tex_.height = 128;
                    var _frame = new cc.SpriteFrame(tex_);
                    let avatar = cc.find('Canvas/avatar');
                    avatar.getComponent(cc.Sprite).spriteFrame = _frame;
                });

                console.log("nickName: " + nickName);
                console.log("province: " + province);
                console.log("language: " + language);
                console.log("avatarUrl: " + avatarUrl);        
            }
        });
    },

    //  长振动
    vibrateEffect: function() {
        wx.vibrateLong({
            success: function() {
              console.log("vibrate suceess");
            },

            fail: function(res) {
                console.log("vibrate failed: " + res.errMsg);
            }
        });
    },

    onHitCocos: function() {
        this.getUserInfo();

        this.displayText();
        this.vibrateEffect();
    },

    onHitShare: function() {
        this.userShare();
    },

    displayText: function() {
        this.label.string = this.text;        
    },

    displayWeAvatar: function(url) {
        cc.loader.load(url, function(err, texture){
            let tex = new cc.SpriteFrame(texture);
            this.avatarSprite.spriteFrame = tex;
        });
    }
});
