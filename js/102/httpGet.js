'use strict';

const http = require('http');

http.get(process.argv[2], response => {
  response.setEncoding('utf-8');
  /*response.on('data', data => {
    console.log(data.toString());
  });*/
  response.on('data', console.log);

  response.on('error', err => {
    console.error('OOPS => ', err);
  });

  response.on('end', () => {
    //console.log('end');
  });
}).on('error', err => {
  console.error('OOPS2 => ', err);
})