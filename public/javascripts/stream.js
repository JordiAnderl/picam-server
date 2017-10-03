let socket = io();
socket.on('liveStream', function (data) {
    let img = document.getElementById("stream");
    let srcAttr = document.createAttribute("src");
    srcAttr.value = data;
    img.attributes.setNamedItem(srcAttr);
});
function startStream() {
    socket.emit('start-stream');
    changeElements(true);
}
function stopStream() {
    socket.emit('disconnect');
    changeElements(false);
}
function changeElements(start) {
    let startBtn = document.getElementById("start");
    let stopBtn = document.getElementById("stop");
    let infoMsg = document.getElementById("infoMsg");
    let startVisibility = start ? "hidden" : "";
    let stopVisibilty = start ? "" : "hidden";
    startBtn.style.visibility = startVisibility;
    stopBtn.style.visibility = stopVisibilty;
    infoMsg.style.visibility = startVisibility;
}
let timelapseBtn = document.getElementById("timelapse");
timelapseBtn.disabled = true;
//# sourceMappingURL=stream.js.map