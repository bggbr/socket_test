const router = require("express").Router();
const { getSocketIO } = require("./ws_server");

router.get("/", (req, res) => {
    console.log("router test");
    getSocketIO().emit("dwitter", { data: "data" });
    res.send("router test");
});

router.get("/recevie", (req, res) => {
    getSocketIO().on("socket_emit", (msg) => {
        console.log(msg);
    });
    res.send("socket receive");
});

module.exports = router;
