const fs = require("fs");
const { resolve } = require("path");
const Path = require("path");
const { readLinks, readText } = require("./readLinks.js");

let fileRead = (newPath, options) => {
  let acumAll = []
    // let file =  new Promise ((resolve, reject) => {
    newPath.map((link) => {
      acumAll.push(
        new Promise((resolve, reject) => {
          let acum = [];
          fs.readFile(link, "utf8", (err, data) => {
            if (err) {
              throw ((Error = "Hubo un error"), err.message);
            } else {
              let archivo;
              Promise.all([readLinks(data)]).then((res) => {
                // console.log('res ', res.toString())
                readText(data).then((ele) => {
                  for (let i = 0; i < ele.length; i++) {
                    archivo = {
                      // href: res[1].map((link) => link.map(ele => {return ele})),
                      href: res.map((link) => link[i].slice(0, 51)),
                      text: ele[i].slice(1, ele[i].indexOf("]")),
                      file: link,
                    };
                    acum.push(archivo);
                  }
                  // console.log("acum ", acum);
                  // return acum;
                  resolve(acum);
                });
              });
            }
          });
        })
      );
    })
  return Promise.all(acumAll);
};


module.exports = {
  readFile: fileRead,
};
