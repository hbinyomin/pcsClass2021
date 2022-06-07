'use strict';

const http = require('http');
const bl = require('bl');

http.get(process.argv[2], response => {
  response.pipe(bl((err, data) => {
    if (err) {
      return console.error(err);
    }

    const das = data.toString();
    console.log(das.length);
    console.log(das);
  }));

}).on('error', err => {
  console.error('OOPS2 => ', err);
})