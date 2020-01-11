const fs = require('fs');

const loadJSON = (filepath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filepath, 'utf8', (err, data) => {
      if(err) {
       return reject(err)
      } else {
       return resolve(JSON.parse(data));
      }
    })
  });
}

module.exports= {loadJSON};