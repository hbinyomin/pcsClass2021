const http = require('http');
const map = require('through2-map');

http.createServer((req, res) => {
  //req.on('data', data => res.write(data.toString().toUpperCase()));
  //req.on('end', () => res.end());

  if (req.method !== 'POST') {
    res.statusCode = 400;
    return res.end('send me a POST\n')
  }

  req.pipe(map(chunk => chunk.toString().toUpperCase())).pipe(res);
}).listen(process.argv[2]);