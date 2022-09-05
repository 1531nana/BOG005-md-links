const Path = require("path");
const { marked, Renderer } = require("marked");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;


let mdLinks = (path, options) => {
  //valida si la ruta es absoluta o relativa
  if (path == undefined) {
    throw Error ('Debe ingresar una ruta')
  } else if (!Path.isAbsolute(path)) {
    let newPath = Path.resolve(__dirname, path);
    return newPath;
  } else {
    let newPath = path;
    console.log("Soy absoluta ", path);
    return newPath;
  }
};



module.exports = {
  mdLinks
};
