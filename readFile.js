const fs = require("fs");
const Path = require("path");
const { mdLinks } = require("./modulo.js");
const { readLinks, readText } = require("./readLinks.js");
const fetch = require('node-fetch');
const { readFileOptions } = require("./readFileOption.js");

let readFile = (newPath, options) => {
  if (Path.extname(newPath) == ".md") {
    let acum = [];
    fs.readFile(newPath, "utf8", (err, data) => {
      if (err) {
        console.log("error en readfile ", err);
      } else {
        Promise.all([readLinks(data)])
          .then((res) => {
            readText(data).then((ele) => {
              for (let i = 0; i < ele.length; i++) {
                acum.push({
                  href: res.map((link) => {
                        // fetch(link[i]).then(resp => { return console.log(`${link[i].slice(0, 51)} ${resp.status} ${resp.statusText} `)})
                        // // fetch(link[i]).then(resp => console.log('fetch ', resp.status))
                        // // return `${link[i].slice(0, 51)} ${res.status} ${res.statusText}`
                        // .catch((error) => {return console.log(error.message)})
                    (readFileOptions(link[i]))
                    return link[i].slice(0, 51);
                  }),
                  text: ele[i].slice(1, ele[i].indexOf("]")),
                  file: newPath,
                });
              }
              return console.log("acum ", acum);
            });
          });
      }
    });
  }
};



module.exports = {
  readFile
};
