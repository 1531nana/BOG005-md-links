const fs = require("fs");
const Path = require("path");

let readdirec = (path) => {
  let arreglo = [];
  let newPath;
  // if (path == undefined) {
  //   throw Error("Debe ingresar una ruta");
  // } else
   if (!Path.isAbsolute(path)) {
    newPath = Path.resolve(path);
  } else {
    newPath = path;
  }
  if (fs.statSync(newPath).isFile() && Path.extname(newPath) == ".md") {
    arreglo.push(newPath);
  }else {
    let direc = fs.readdirSync(newPath);
    direc.forEach((elemento) => {
      elemento = Path.join(newPath, elemento);
      if (fs.statSync(elemento).isDirectory()) {
        arreglo = readdirec(elemento).concat(arreglo);
      } else if (Path.extname(elemento) == ".md") {
        arreglo.push(elemento);
      } else {
        return;
      }
    });
  }
  return arreglo;
};

module.exports = {
  readdirec,
};
