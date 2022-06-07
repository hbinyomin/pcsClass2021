'use strict';

const fs = require('fs');

const readStream = fs.createReadStream(process.argv[2], 'utf-8');

let chunks = 0;
readStream.on('data', chunk => {
  console.log(chunk, ` =================> chunk ${++chunks}`);
});

readStream.on('end', () => console.log('done reading file'));
readStream.on('error', err => console.log(err));

console.log('end of file');