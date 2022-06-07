const fs = require('fs');

const fileContents = fs.readFileSync(process.argv[2], 'utf8');

console.log(fileContents/*.toString()*/.split('\n').length - 1);

console.log('file end');