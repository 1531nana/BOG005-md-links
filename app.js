const {mdLinks} = require('./modulo.js');
const {readFile} = require('./readFile');
const {readdirec} = require('./readDir.js')
// const {mdLinks} = require('./index.js');

// const fs = require("fs");
// const Path = require("path");

// let mdLinks = (path, options) => {
//   if (!Path.isAbsolute(path)) {
//     path = Path.resolve("./");
//     console.log("no soy absoluta ", path);
//    } else {
//     console.log("soy absoluta ", path);
//   }

//     fs.stat(path, (error, data)=>{
//       if(data){
//         //   if(data.isDirectory()){
//         fs.readdir(path, (error, data)=>{
//           if(error){
//                   throw Error('Hubo un error en if de stat de readdir ', error)
//                 }
//                 console.log('es directorio de stat readdir ', data)
//         })
//       }
//     })

//     fs.readdir(path, (error, data)=>{ // este me lee todos los archivos md que estén en carpeta, no me accede al
//     //directorio (ruta absoluta)
//      // fs.readdir(path, (error, data)=>{ //este me lee solo los directorios
//       if(error){
//         console.log('estoy en readdir error ',error)
//       }
//       else if (!error) {
//         // console.log('antes en resolve  ', path)
//         // console.log('path ', Path.dirname(path))
            
//             // console.log('data ',data)
//             if(path){
//             //   console.log('antes en readdir  ', path, data) //está en formato de array
//               // data.forEach(archivo => console.log(archivo)) //está en formato de lista
//               let filtro = data.filter((archivo) => Path.extname(archivo) == '.md') //está en formato de lista
//             //   fs.readFile(filtro, 'utf8', (error, data)=>{
//             //     if(error){
//             //         console.log('hubo un error en readfile readme')
//             //     }
//             //     console.log('en readfile readme ',data)
//             //   })
//               console.log('estoy en readdir if  ', filtro) //está en formato de array
//             }else {
//               let filtro = data.filter(archivo => Path.extname(archivo) == '.md')
//               console.log('estoy en readdir if  ', filtro)
//             }
//           }
//     })




// //   if (Path.isAbsolute(path)) {
// //     console.log("absoluta ", Path.isAbsolute(path));
// //     if (path) {
// //       fs.promises
// //         .readdir(path)
// //         .then((filenames) => {
// //           for (let filename of filenames) {
// //             return filename
// //             // console.log('dentro de readfile ', filename);
// //           }
// //         })
// //         .catch((err) => {
// //           console.log(err);
// //         });
// //     }
// //   }
// };
readdirec(mdLinks(process.argv[2]));
readFile(mdLinks(process.argv[2]));
// readLinks(mdLinks(process.argv[2]))

