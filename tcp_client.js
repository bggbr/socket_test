const net = require("net");

const client = new net.Socket();
client.connect(3334, "127.0.0.1", function () {
    console.log("Connected");
    // client.write("Hello, server! Love, Client.");
});
client.write("client send data");

client.on("data", function (data) {
    console.log("Received: " + data);
});

client.on("emit_data", function (data) {
    console.log("Received: " + data);
});

client.on("close", function () {
    console.log("Connection closed");
});
