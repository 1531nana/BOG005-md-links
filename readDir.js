const fs = require("fs");
const Path = require("path");
const { readFile } = require("./readFile.js");
const { mdlinks } = require("./modulo.js");

let readdirec = (newPath) => {
  //mira es un directorio
  let arreglo = [];
  if (Path.extname(newPath) == "") {
    let direc = fs.readdirSync(newPath);
    //itera sobre cada elemento
    direc.forEach((elementos) => {
      //junto la ruta
      elementos = Path.join(newPath, elementos);
      //miro si el elemento no tiene extensión
      if (Path.extname(elementos) == "") {
        console.log("Estoy sin extensión ", elementos);
        fs.stat(elementos, (error, data) => {
          if (error) {
            return console.log("Hubo un error ", error);
          } else {
            if (Path.extname(elementos) == "" && data.isDirectory() == false) {
              return console.log("Esto no es un archivo .md");
            } else {
              // elementos = data
              console.log("data, elemetos ", elementos);
              readdirec(elementos);
            }
          }
        });
      } else {
        readFile(elementos);
      }
    });
  }
};

module.exports = {
  readdirec,
};
