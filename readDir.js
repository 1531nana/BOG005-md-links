const fs = require("fs");
const Path = require("path");
const { readFile } = require("./readFile.js");
const { mdlinks } = require("./modulo.js");

// let readdirec = (newPath, options) => {
//     // fs.stat(newPath, (error, data) => {
//     //   if (error) {
//     //     return console.log("Hubo un error ", error);
//     //   } else {
//     //     console.log("soy newpath ", data.isDirectory());
//     //   }
//     // });
//     // console.log('soy newpath ', newPath.isDirectory())

//     //mira es un directorio
//     if (Path.extname(newPath) == "") {
//       fs.readdir(newPath, (error, data) => {
//         if (error) {
//           return console.log("Hubo un error ", error);
//         } else {
//           // console.log("soy la data ", data);
//           //itera sobre cada elemento
//           data.forEach((elementos) => {
//             // console.log(elementos);
//             elementos = Path.join(newPath, elementos);
//             if (Path.extname(elementos) == "") {
//               console.log("Estoy sin extensión ", elementos);
//               fs.stat(elementos, (error, data) => {
//                 if (error) {
//                   return console.log("Hubo un error ", error);
//                 } else {
//                   if (
//                     Path.extname(elementos) == "" &&
//                     data.isDirectory() == false
//                   ) {
//                     console.log('Esto no es un archivo .md', elementos)
//                     // readFile(elementos);
//                   } else {
//                     readdirec(elementos);
//                   }
//                 }
//               });
//             } else {
//               readFile(elementos);
//             }
//             // console.log("Soy carpeta o directorio ", data);
//           });
//         }
//         //   else{
//         //     console.log(readdir(mdLinks))
//         //   }
//       });
//     }
//   };

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
                console.log('data, elemetos ', elementos)
              readdirec(elementos);
            }
          }
        });
      } else {
    arreglo.push(readFile(elementos));
}
// return arreglo
});
  }
};

module.exports = {
  readdirec,
};
