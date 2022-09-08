const fs = require("fs");
const Path = require("path");

let readdirec = (path) => {
  let arreglo = [];
  let newPath;
  if (path == undefined) {
    throw Error("Debe ingresar una ruta");
  } else if (!Path.isAbsolute(path)) {
    newPath = Path.resolve(__dirname, path);
  } else {
    newPath = path;
  }
  //mira es un directorio
  if (Path.extname(newPath) == ".md" && fs.statSync(newPath).isFile()) {
    arreglo.push(newPath);
  } else {
    let direc = fs.readdirSync(newPath);
    //itera sobre cada elemento
    direc.forEach((elemento) => {
      //junto la ruta
      elemento = Path.join(newPath, elemento);
      if (fs.statSync(elemento).isDirectory()) {
        arreglo = readdirec(elemento).concat(arreglo);
      } else if (Path.extname(elemento) == ".md") {
        arreglo.push(elemento);
      } else {
        return
      }
    });
  }
  return arreglo
};

module.exports = {
  readdirec,
};
