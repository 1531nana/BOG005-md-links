const fs = require("fs");
const fsPromises = require("fs").promises;
const Path = require("path");
const { mdLinks } = require("./modulo.js");
const { readLinks, readText } = require("./readLinks.js");
const fetch = require('node-fetch');

let readFile = (newPath, options) => {
  if (Path.extname(newPath) == ".md") {
    let acum = [];
    fs.readFile(newPath, "utf8", (err, data) => {
      if (err) {
        console.log("error en readfile ", err);
      } else {
        Promise.all([readLinks(data)])
          .then((res) => {
            // fetch(res).then(resp => console.log('fetch ', resp))
            readText(data).then((ele) => {
              for (let i = 0; i < ele.length; i++) {
                acum.push({
                  href: res.map((link) => {
                        fetch(link[i]).then(resp => console.log('fetch ', resp.status))
                        .catch((error) => console.log(error.message))
                    return link[i].slice(0, 51);
                  }),
                  text: ele[i].slice(1, ele[i].indexOf("]")),
                  file: newPath,
                });
              }
              console.log("acum ", acum);
            });
          });
      }
    });
  }
};



module.exports = {
  readFile,
  fetch
};
