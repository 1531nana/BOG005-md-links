const fs = require("fs");
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

// let readdirec = (newPath, options) => {
//   // fs.stat(newPath, (error, data) => {
//   //   if (error) {
//   //     return console.log("Hubo un error ", error);
//   //   } else {
//   //     console.log("soy newpath ", data.isDirectory());
//   //   }
//   // });
//   // console.log('soy newpath ', newPath.isDirectory())

//   //mira es un directorio
//   if (Path.extname(newPath) == "") {
//     fs.readdir(newPath, (error, data) => {
//       if (error) {
//         return console.log("Hubo un error ", error);
//       } else {
//         // console.log("soy la data ", data);
//         //itera sobre cada elemento 
//         data.forEach((elementos) => {
//           // console.log(elementos);
//           elementos = Path.join(newPath, elementos);
//           if (Path.extname(elementos) == "") {
//             console.log("Estoy sin extensión ", elementos);
//             fs.stat(elementos, (error, data) => {
//               if (error) {
//                 return console.log("Hubo un error ", error);
//               } else {
//                 if (
//                   Path.extname(elementos) == "" &&
//                   data.isDirectory() == false
//                 ) {
//                   console.log('Esto no es un archivo .md', elementos)
//                   // readFile(elementos);
//                 } else {
//                   readdirec(elementos);
//                 }
//               }
//             });
//           } else {
//             readFile(elementos);
//           }
//           // console.log("Soy carpeta o directorio ", data);
//         });
//       }
//       //   else{
//       //     console.log(readdir(mdLinks))
//       //   }
//     });
//   }
// };

// let readFile = (newPath, options) => {
//   fs.readFile(newPath, "utf-8", (error, data) => {
//     if (error) {
//       console.log("Hay un error");
//     } else {
//         if(Path.extname(newPath) == ".md"){
//             console.log("soy un archivo md ", newPath, data);
//             readLinks(newPath)
//             return newPath
//         }
//         else{
//           return
//             // console.log('No hay archivos .md para analizar ', data)
//         }
//     }
//   });
// };




module.exports = {
  mdLinks
  // readdirec,
  // readFile,
  // readLinks
};
