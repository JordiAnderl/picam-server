"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
let router = express_1.Router();
const imgLocation = "D:/dummy_img/dummy.jpg";
/* GET home page. */
// TODO: Mudar esto a su propio fichero.
const Socket = require("socket.io");
const fs = require("fs");
let socket = Socket();
let clients = new Map();
socket.on("connection", (sock) => {
    clients.set(sock.id, sock);
    sock.on("disconnect", () => {
        clients.delete(sock.id);
        if (clients.size === 0) {
            // Name más conectado, matamos el stream.
            // Cambiar variable global de watchingfile a false
            if (proc)
                proc.kill();
            fs.unwatchFile(imgLocation);
        }
    });
    sock.on("start-stream", () => {
        startStream(sock);
    });
});
function stopStream() {
    if (clients.size == 0) {
        // app.set('watchingFile', false);
        // if (proc) proc.kill();
        fs.unwatchFile(imgLocation);
    }
}
function startStream(io) {
    //if (app.get('watchingFile')) {
    io.sockets.emit('liveStream', 'image_stream.jpg?_t=' + (Math.random() * 100000));
    //    return;
    //  }
    // var args = ["-w", "640", "-h", "480", "-o", "./stream/image_stream.jpg", "-t", "999999999", "-tl", "100"];
    // proc = spawn('raspistill', args);
    console.log('Watching for changes...');
    // app.set('watchingFile', true);
    //<img src="”data:image/png;base64,{{imgData}}/">
    fs.watch(imgLocation, function (event, name) {
        if (event === "change") {
            io.sockets.emit('liveStream', 'image_stream.jpg?_t=' + (Math.random() * 100000));
        }
    });
}
router.get('/', function (req, res, next) {
    // res.sendFile(path.join(__dirname, "../public", "indexpalo3.html"));
    res.render('index', { title: 'Picam 0' });
});
router.get(`/:name`, (req, res) => {
    // Extract the name from the request parameters
    let { name } = req.params;
    // Greet the given name
    res.render('greeter', { name: name });
});
exports.index = router;
//# sourceMappingURL=index.js.map