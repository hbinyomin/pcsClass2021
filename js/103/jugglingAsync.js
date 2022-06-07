'use strict';

const http = require('http');

const results = [];
let completed = 0;

function getHttp(url, index) {
  http.get(url, response => {
    response.setEncoding('utf-8');

    let result = '';
    response.on('data', data => {
      result += data;
    });

    response.on('error', err => {
      console.error('OOPS => ', err);
    });

    response.on('end', () => {
      //console.log(result);
      //console.log('finished', url);
      //results[index] = url;
      results[index] = result;

      if (++completed === 3) {
        //results.forEach((result, i) => console.log(`${i} - ${result}`));
        results.forEach(r => console.log(r));
      }
    });
  }).on('error', err => {
    console.error('OOPS2 => ', err);
  });
}

for(let i = 2; i < process.argv.length; i++) {
  getHttp(process.argv[i], i - 2);
}

