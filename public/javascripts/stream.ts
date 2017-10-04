


let socket = <SocketIO.Server>io();

socket.on('liveStream', function (data: string) {
  let img = <HTMLImageElement>document.getElementById("stream");
  let srcAttr = document.createAttribute("src");
  srcAttr.value = data;
  img.attributes.setNamedItem(srcAttr);
});

socket.on('connected', function (data: string) {
  let infoMsg = <HTMLParagraphElement>document.getElementById("infoMsg");
  infoMsg.textContent += ' Good news everyone! The socket is online.'
});

socket.on('connected', function (data: string) {
  let infoMsg = <HTMLParagraphElement>document.getElementById("infoMsg");
  infoMsg.textContent += ' Good news everyone! The socket is online.'
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

window.onload = (event: Event) => {
  let timelapseBtn = <HTMLButtonElement>document.getElementById("timelapse");
  timelapseBtn.disabled = true;
}
