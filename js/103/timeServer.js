const net = require('net');

const server = net.createServer(socket => {
  //console.log('got connection');
  //socket.end('goodbye\n');

  // "2013-07-06 17:42"

  const now = new Date();

  const year = now.getFullYear();
  const month = (now.getMonth() + 1).toString().padStart(2, '0');
  const date = now.getDate().toString().padStart(2, '0');
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');

  socket.end(`${year}-${month}-${date} ${hours}:${minutes}\n`);
});
server.listen(process.argv[2]);