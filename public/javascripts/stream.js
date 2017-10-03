


  var socket = io();
  socket.on('liveStream', function(data) {
    $('#stream').attr('src', data);
    $('.start').hide();
  });
 
  function startStream() {
    socket.emit('start-stream');
    $('.start').hide();
  }
