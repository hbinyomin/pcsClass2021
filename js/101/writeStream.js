const fs = require('fs');

const writeStream = fs.createWriteStream(process.argv[2], 'utf-8');
writeStream.write('Hello, world!');
writeStream.end();

writeStream.on('finish', () => console.log('done writing file'));
writeStream.on('error', err => console.log(err));

console.log('end of file');