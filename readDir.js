const fs = require("fs");
const Path = require("path");
const {readFile} = require('./readFile.js')
const {mdlinks} = require('./modulo.js')


let readdirec = (newPath, options) => {
    // fs.stat(newPath, (error, data) => {
    //   if (error) {
    //     return console.log("Hubo un error ", error);
    //   } else {
    //     console.log("soy newpath ", data.isDirectory());
    //   }
    // });
    // console.log('soy newpath ', newPath.isDirectory())
  
    //mira es un directorio
    if (Path.extname(newPath) == "") {
      fs.readdir(newPath, (error, data) => {
        if (error) {
          return console.log("Hubo un error ", error);
        } else {
          // console.log("soy la data ", data);
          //itera sobre cada elemento 
          data.forEach((elementos) => {
            // console.log(elementos);
            elementos = Path.join(newPath, elementos);
            if (Path.extname(elementos) == "") {
              console.log("Estoy sin extensión ", elementos);
              fs.stat(elementos, (error, data) => {
                if (error) {
                  return console.log("Hubo un error ", error);
                } else {
                  if (
                    Path.extname(elementos) == "" &&
                    data.isDirectory() == false
                  ) {
                    console.log('Esto no es un archivo .md', elementos)
                    // readFile(elementos);
                  } else {
                    readdirec(elementos);
                  }
                }
              });
            } else {
              readFile(elementos);
            }
            // console.log("Soy carpeta o directorio ", data);
          });
        }
        //   else{
        //     console.log(readdir(mdLinks))
        //   }
      });
    }
  };

  module.exports = {
    readdirec
  }