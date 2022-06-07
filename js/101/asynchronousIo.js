/*const fs = require('fs');

fs.readFile(process.argv[2], 'utf-8', (err, data) => {
    if (err) {
      return console.log(err);
    }
    console.log(data.split('\n').length - 1);
});

//console.log('file end');*/

const fs = require('fs/promises');

/*
fs.readFile(process.argv[2], 'utf-8')
  .then(data => console.log(data.split('\n').length - 1))
  .catch(err => console.log(err));
*/

(async () => {
  try {
    const fileContents = await fs.readFile(process.argv[2], 'utf-8');
    console.log(fileContents.split('\n').length - 1);
  } catch (err) {
    console.log(err);
  }
})();
