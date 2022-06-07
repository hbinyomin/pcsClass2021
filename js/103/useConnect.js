//const connect = require('connect');
//const app = connect();

const app = require('connect')();

/*app.use((req, res, next) => {
  const now = new Date();
  console.log(`${now.toLocaleDateString()} ${now.toLocaleTimeString()} - ${req.url}`);
  next();
});*/

app.use(require('./logger'));

/*app.use((req, res, next) => {
  res.write('Hello from connect');
  next();
});

app.use('/middle', (req, res, next) => {
  res.write('Im in middle');
  next();
});

app.use((req, res, next) => {
  res.end('Goodbye from connect');
});*/

/*
app.use((req, res, next) => {
  res.setHeader('Content-Type', 'text/html');
  next();
});

app.use('/index.html', (req, res, next) => {
  res.write('<h1>This is the PCS home page</h1>');
  next();
});

app.use('/aboutus.html', (req, res, next) => {
  res.write('<h2>PCS is a great organization</h2>');
  next();
});

app.use((req, res, next) => {
  res.end('<h5>&copy; 2022 PCS</h5>');
  //next();
});*/

app.use((req, res, next) => {
  res.setHeader('Content-Type', 'text/html');
  next();
});

app.use('/index.html', (req, res, next) => {
  res.end('<h1>This is the PCS home page</h1>');
});

app.use('/aboutus.html', (req, res, next) => {
  res.end('<h2>PCS is a great organization</h2>');
});

app.use('/makeError', (req, res, next) => {
  //foo();
  throw new Error('This is a custom error');
});

/*app.use((req, res, next) => {
  const baseUrl = 'http://' + req.headers.host;
  const url = new URL(req.url, baseUrl);
  req.searchParams = url.searchParams;

  next();
});*/

app.use(require('./queryParser'));

app.use('/sayHello', (req, res, next) => {
  //const baseUrl = 'http://' + req.headers.host;
  //const url = new URL(req.url, baseUrl);
  //const name = url.searchParams.get('name') || 'stranger';

  const name = req.searchParams.get('name') || 'stranger';

  res.end(`Hellooooo, ${name}`);
});

app.use('/sayGoodbye', (req, res, next) => {
  //const baseUrl = 'http://' + req.headers.host;
  //const url = new URL(req.url, baseUrl);
  //const name = url.searchParams.get('name') || 'stranger';

  const name = req.searchParams.get('name') || 'stranger';

  res.end(`Gooooodbye, ${name}`);
});

app.use((req, res, next) => {
  //res.statusCode = 404;
  //res.end('<h1>Page not found</h1>');
  throw { statusCode: 404, message: 'Page not found' };
});

app.use((error, req, res, next) => {
  res.statusCode = error.statusCode || 500;
  res.write(`OOPS - ${error.message}`);
  next(error);
  //next();
});

app.use((error, req, res, next) => {
  res.end(`Second handler - ${error.message}`);
});

app.listen(80);