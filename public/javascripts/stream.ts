


let socket = <SocketIO.Server>io();

socket.on('liveStream', function (data: string) {
  let img = <HTMLImageElement>document.getElementById("stream");
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
  let elem = <HTMLButtonElement>document.getElementById("start");
  elem.style.visibility = "hidden";
}

function showBttn() {
  let elem = <HTMLButtonElement>document.getElementById("start");
  elem.style.visibility = "";
}

