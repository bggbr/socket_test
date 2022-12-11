const { Server } = require("socket.io");

class Socket {
    constructor(server) {
        this.io = new Server(server, {
            cors: {
                origin: "*",
            },
        });

        this.io.on("connection", (socket) => {
            console.log("Socket client connected");
        });
    }
}

let socket;
exports.initSocket = (server) => {
    if (!socket) {
        socket = new Socket(server);
    }
};

exports.getSocketIO = () => {
    if (!socket) {
        throw new Error("Please call init first");
    }
    return socket.io;
};
