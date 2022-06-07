//const fs = require('fs');
const path = require('path');

/*
fs.readdir(process.argv[2], (err, files) => {
  if (err) {
    return console.log(err);
  }
  /*files.forEach(file => {
    /*if (file.endsWith(process.argv[3])) {
      console.log(file);
    }* /
    if (path.extname(file) === `.${process.argv[3]}`) {
      console.log(file);
    }
  });* /

  files.filter(file => path.extname(file) === `.${process.argv[3]}`)
    .forEach(file => console.log(file));
});*/

const fs = require('fs/promises');

(async () => {
  try {
    const files = await fs.readdir(process.argv[2]);
    files.filter(file => path.extname(file) === `.${process.argv[3]}`)
      .forEach(file => console.log(file));
  }
  catch (err) {
    console.log(err);
  }
})();