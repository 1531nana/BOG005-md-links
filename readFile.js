const fs = require("fs");
const Path = require("path");
const {mdLinks} = require('./modulo.js')



let readFile = (newPath, options) => {
    fs.readFile(newPath, "utf-8", (error, data) => {
      if (error) {
        console.log("Hay un error");
      } else {
          if(Path.extname(newPath) == ".md"){
              console.log("soy un archivo md ", newPath, data);
            //   readLinks(newPath)
              return newPath
          }
          else{
            return
              // console.log('No hay archivos .md para analizar ', data)
          }
      }
    });
  };


  
  module.exports = {
    readFile
  }