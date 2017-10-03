


let socket = <SocketIO.Server>io();

socket.on('liveStream', function (data: string) {
  let img = <HTMLImageElement>document.getElementById("stream");
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
function changeElements(start: boolean) {
  let startBtn = <HTMLButtonElement>document.getElementById("start");
  let stopBtn = <HTMLButtonElement>document.getElementById("stop");
  let infoMsg = <HTMLParagraphElement>document.getElementById("infoMsg");

  let startVisibility = start ? "hidden" : "";
  let stopVisibilty = start ? "" : "hidden";

  startBtn.style.visibility = startVisibility;
  stopBtn.style.visibility = stopVisibilty;
  infoMsg.style.visibility = startVisibility;

}

let timelapseBtn = <HTMLButtonElement>document.getElementById("timelapse");
timelapseBtn.disabled = true;