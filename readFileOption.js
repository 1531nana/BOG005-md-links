const fetch = require("node-fetch");
const { readFile } = require("./readFile");

let readFileOptions = (newPath, options) => {
// newPath = readFile(newPath)
  let iteraLink;
  // newPath.then(res => console.log('res ',res))
  //   let promise = new Promise((resolve, reject) => {
  newPath.then((res) => {
    // console.log('soy res ',res)
    iteraLink = res
      .map((link) => {
        return fetch(link.href).then((result) => {
          if (result.status >= 200 && result.status < 400) {
            link['status'] = result.status;
            link['statusText'] = result.statusText;
            return console.log(link);
          } else if (result.status >= 400) {
            link['status'] = result.status;
            link['statusText'] = 'Fail';
            return console.log(link);
          }
        });
      })
    })
    .catch((error) => {
      return error;
    });

  // Promise.all([newPath, iteraLink]).then(res => console.log(res))
  // newPath.then((res) => console.log(res, iteraLink))
  // console.log(resolve(newPath))
  //   });
  return Promise.all([iteraLink]);
};

module.exports = {
  readFileOptions,
};
