const { readdirec } = require("./readDir");
const { readFile } = require("./readFile");
const { readFileOptions } = require("./readFileOption");

let mdLinks = (path, options = { validate: false }) => {
  let arrayMd = readdirec(path);
  let linksMd = readFile(arrayMd).then((res) => {
    return (linksMd = res[0].flat());
  });
  return new Promise((resolve, reject) => {
    if (options.validate == false) {
      resolve(linksMd);
    } else if (options.validate === true) {
      resolve(readFileOptions(linksMd));
    }
  });
};

module.exports = {
  mdLinks,
};
