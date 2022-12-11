const express = require("express");
const app = express();
const morgan = require("morgan");
const net = require("net");
const EventEmitter = require("events");
const port = 3333;

app.use(morgan("tiny"));
app.listen(port);

app.get("/", (req, res) => {
    console.log("hello world");
    res.send("hello world");
});
