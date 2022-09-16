const { readdirec } = require("./readDir");
const { readFile } = require("./readFile");
const { readFileOptions } = require("./readFileOption");

let mdLinks = (path, options = { validate: false }) => {
  let linksMd;
  let arrayMd = readdirec(path);
  return new Promise((resolve, reject) => {
    readFile(arrayMd).then((res) => {
      linksMd = res[0].flat();
      if (options.validate == false) {
        resolve(linksMd);
      } else if (options.validate === true) {
        readFileOptions(linksMd).then((res) => {
          resolve(res);
        });
      }
    });
  });
};

module.exports = {
  mdLinks,
};
