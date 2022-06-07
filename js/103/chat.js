
const net = require('net');

const sockets = [];
let messages = '';

const server = net.createServer(socket => {
  sockets.push(socket);

  socket.write(messages);

  //socket.on('data', data => socket.write(data));

  //socket.on('data', data => sockets.forEach(s => s.write(data)));
  socket.on('data', data => {
    messages += data;
    sockets.filter(s => s !== socket).forEach(s => s.write(data));
  });

  socket.on('close', () => {
    console.log('socket closed');
    sockets.splice(sockets.indexOf(socket), 1);
  });
});

server.listen(process.argv[2]);