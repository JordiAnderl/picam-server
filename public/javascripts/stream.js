let socket = io();
socket.on('liveStream', function (data) {
    let img = document.getElementById("stream");
    let srcAttr = document.createAttribute("src");
    srcAttr.value = data;
    img.attributes.setNamedItem(srcAttr);
});
socket.on('connected', function (data) {
    let infoMsg = document.getElementById("infoMsg");
    infoMsg.textContent += ' Good news everyone! The socket is online.';
});
function startStream() {
    socket.emit('start-stream');
    changeElements(true);
}
function stopStream() {
    socket.emit('disconnect-client');
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
window.onload = (event) => {
    let timelapseBtn = document.getElementById("timelapse");
    timelapseBtn.disabled = true;
};
//# sourceMappingURL=stream.js.map