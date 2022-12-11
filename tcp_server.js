const net = require("net");
const server = net.createServer(function (socket) {
    socket.write("Echo server\r\n");
    // socket.pipe(socket);
    socket.on("data", (msg) => {
        console.log("server received msg =", msg.toString());
    });
    console.log("===========================");
    // console.log("socket =", socket);
    console.log("===========================");
});
// console.log(server);
server.listen(3334, () => {
    console.log(`listening on port ${3334}`);
});
const test = new net.Server();
console.log(test);
// class TCPSocket {
//     constructor(port) {
//         this.io = net.createServer((socket) => {
//             socket.write("Echo server\r\n");
//             socket.pipe(socket);
//         });

//         this.io.listen(3334);
//     }
// }
// let socket;

// function initSocket(socket) {
//     if (!socket) {
//         socket = new TCPSocket(3334);
//         console.log(socket);
//     }
// }
// function getSocketIO() {
//     return socket.io;
// }

// initSocket();

// getSocketIO().on("data", (msg) => {
//     console.log(msg);
// });
// const tcpSocket = new TCPSocket(3334);
