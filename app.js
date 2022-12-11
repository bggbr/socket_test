const express = require("express");
const app = express();
const morgan = require("morgan");
const net = require("net");
const event = require("events");
const { Server } = require("socket.io");
const port = 3333;

app.use(morgan("tiny"));

app.get("/", (req, res) => {
    console.log("hello world");
    res.send("hello world");
});

const TestRouter = require("./router_example");

app.use("/test", TestRouter);

const server = app.listen(port, () => {
    console.log(`express ${port}`);
});

const { initSocket, getSocketIO } = require("./ws_server");
initSocket(server);
