const fs = require("fs");
const Path = require("path");
const { readLinks, readText } = require("./readLinks.js");

let fileRead = (newPath, options) => {
  // let acumAll = []
  // let promesa = new Promise((resolve, reject) => {
    let acum = [];
    return Promise.all(
    newPath.map((link) => {
      // new Promise((resolve, reject) => {
        return new Promise((resolve, reject) => {
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
          // resolve(file)
        });
        // })
      });
      // resolve(promesa)
    }));
    // resolve(promesa2);
    // return promesa2
  // });

};

module.exports = {
  readFile: fileRead,
};
