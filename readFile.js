const fs = require("fs");
const Path = require("path");
const { readLinks, readText } = require("./readLinks.js");

let fileRead = (newPath, options) => {
  let acum = [];
  return Promise.all(
    newPath.map((link) => {
      return new Promise((resolve, reject) => {
        fs.readFile(link, "utf8", (err, data) => {
          if (err) {
            throw ((Error = "Hubo un error"), err.message);
          } else {
            let archivo;
            Promise.all([readLinks(data)]).then((res) => {
              readText(data).then((ele) => {
                for (let i = 0; i < ele.length; i++) {
                  archivo = {
                    href: res.map((link) => link[i].slice(0, 51)),
                    text: ele[i].slice(1, ele[i].indexOf("]")),
                    file: link,
                  };
                  acum.push(archivo);
                }
                resolve(acum);
              });
            });
          }
        });
      });
    })
  );
};

module.exports = {
  readFile: fileRead,
};
