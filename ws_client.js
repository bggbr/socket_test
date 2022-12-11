const socket = require("socket.io-client");
const { io } = require("socket.io-client");

const socketIO = io("ws://localhost:3333");
socketIO.on("connect", (msg) => {
    console.log("connection");
});

socketIO.on("connect_error", (error) => {
    console.log("socket error");
});

socketIO.on("dwitter", (msg) => {
    console.log(msg);
});

// class Socket {
//     constructor(BASE_URL) {
//         this.io = io(BASE_URL);

//         this.io.on("connect_error", (err) => {
//             console.log("socket error");
//         });
//     }

//     onSync(event, callback) {
//         this.io.on(event, (message) => callback(message));
//     }

//     onEmit(event, )
// }
