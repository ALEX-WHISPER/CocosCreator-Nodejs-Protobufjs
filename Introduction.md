# Introduction

cocos-creator Node.js protobuf.js

---

## Server-Client
+ Server:
    - Download and install
        * install [npm](https://nodejs.org/en/)
        * install [node](https://nodejs.org/en/download/)
    - Check installation by cmd(I used windows):
    ` npm -v ` to check npm installation
    ` node -v ` to check nodejs installation

    - Build the server
        - Go to your project directory first
        
        - ` mkDir nodeServer_HelloWorld ` 
            Make a new directory, then go to that directory by ` cd nodeServer_HelloWorld `.
            
        - ` npm init ` 
             Create a new project, leave all the default settings. Then npm will create a new file: **package.json** automatically. ([How does package.json work](https://docs.npmjs.com/files/package.json)) 
        - ``` package.json ``` 
            Open package.json to see what's in there currently.
        
        - ` npm install --save express ` 
            Install Express(a common web application framework), ``` --save ``` means you want the npm command to write in your package.json file with Express's versions, which will be added to the **dependencies** property.
            
        - ` npm install --save socket.io `
            Install SocketIO library
            
        - Confirm that the version value have been added to **dependencies** property in **package.json**
        - ` echo >index.js `
            Will create a new empty file called **index.js**, which is the entry point for the application.
            
        - Coding in **index.js**, see **server/index.js** in this repo

+ Client
    - No tricky config needed. Just see the Cocos-creator project in the repo.
    - Scripts related(to socket connection): NetConfig.js, NetControl.js, SocketTest.js

## Prepare your .proto files
+ Create your own .proto files. See example: ` server/nodeServer_HelloWorld/protos/Test.userInfo.proto ` in this repo
+ [What is protobuf](https://www.ibm.com/developerworks/cn/linux/l-cn-gpb/)
    
## Embed protobufjs in creator
- [Download protobuf.js](https://github.com/dcodeIO/protobuf.js/tree/master/dist/protobuf.js)
- Import protobuf.js to creator, **NOT** as plugin
- Deal with .proto files from scripts, see **ProtoTest.js**
- How to use protobuf.js, go to [official document](https://github.com/dcodeIO/protobuf.js)

## Embed protobufjs in Nodejs
- Go to the directory where your server is in

- ` npm install protobufjs --save `
    Install protobufjs module

- Import the prepared .proto files

- ` pbjs -t static-module -w commonjs -o [target file(s)] [source file name] `
    Compile .proto files and generate static code to .js files

- Reference .js files which generated from .proto, see **index.js**

## Connect
- Run your server: ` node index.js `
- Run the app from client
- Start communicating