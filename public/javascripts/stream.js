let socket = io();
socket.on('liveStream', function (data) {
    let img = document.getElementById("stream");
    let srcAttr = document.createAttribute("src");
    srcAttr.value = data;
    img.attributes.setNamedItem(srcAttr);
    //hideBttn();
});
function startStream() {
    socket.emit('start-stream');
    hideBttn();
}
function stopStream() {
    socket.emit('disconnect');
    showBttn();
}
function hideBttn() {
    let elem = document.getElementById("start");
    elem.style.visibility = "hidden";
}
function showBttn() {
    let elem = document.getElementById("start");
    elem.style.visibility = "";
}
//# sourceMappingURL=stream.js.map