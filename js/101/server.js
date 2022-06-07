const http = require('http');

http.createServer((req, res) => {
  console.log(req.url);

  res.setHeader('Content-Type', 'text/html');

  const baseUrl = 'http://' + req.headers.host;
  const url = new URL(req.url, baseUrl);
  console.log(url.pathname);

  switch(/*req.url*/ url.pathname) {
    //case '/':
    case '/index.html':
      res.write('<h1>Welcome to the PCS website!</h1>');
      break;
    case '/about.html':
      res.write('<h2>About PCS</h2>');
      break;
    case '/':
      //res.statusCode = 301;
      //res.setHeader('Location', '/index.html');
      res.writeHead(301, {'Location': '/index.html'});
      break;
    case '/sayHello':
      //console.log(url.searchParams.get('name'));
      res.write(`<h2>Hello, ${url.searchParams.get('name') || 'stranger'}</h2>`);
      break;
    default:
      res.statusCode = 404;
      res.write('<h1>404. This is not the page you are looking for</h1>');
      break;
  }

  res.end();
}).listen(80);