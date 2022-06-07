'use strict';

const fs = require('fs');

const readStream = fs.createReadStream(process.argv[2], 'utf-8');
const writeStream = fs.createWriteStream(process.argv[3], 'utf-8');

/*
readStream.on('data', chunk => {
  writeStream.write(chunk);
});

/*readStream.on('end', () => {
  writeStream.end();
  console.log('done reading file');
});*/

readStream.pipe(writeStream);

writeStream.on('finish', () => console.log('done writing file'));

readStream.on('error', err => console.log(err));
writeStream.on('error', err => console.log(err));

console.log('end of file');