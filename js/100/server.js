//const http = require('http');
import http from 'http';

http.createServer((req, res) => {
  //res.statusCode = 404;
  //res.setHeader('Content-Type', 'text/plain');
  res.writeHead(404, {'Content-Type': 'text/plain'});
  //res.write('Hello World!');
  res.write('Page not found');
  res.end();
}).listen(80);
