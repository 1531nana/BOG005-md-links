const fs = require("fs");
const Path = require("path");

let mdLinks = (path, options) => {

  //   if(!Path.isAbsolute(path)){
  //   // path = Path.resolve(path);
  //   // console.log('ruta convertida a absoluta ', path);
  
  // fs.stat(path, (error, data)=>{
  //   if(error){
  //     throw Error('Hubo un error en stat', error)
  //   } else{
  //     if(data.isFile()){
  //       path = Path.resolve(path);
  //     console.log('ruta convertida a absoluta ', path);
  //       fs.readFile(path, 'utf-8', (error, datas)=>{
  //         if(error){
  //           console.log('hubo un error ', error)
  //         }
  //         console.log(datas)
  //       })
  //     }else if(data.isDirectory()){
  //       fs.readdir(path, (error, datos)=>{
  //         if(error){
  //           throw Error('Hubo un error en else if readdir ', error)
  //         }
  //         console.log('en else if readdir datos ',datos)
  //       })
  //     } 
  //     console.log("Path is file:", data.isFile());
  //     console.log("Path is directory:", data.isDirectory());
  //   }
  
  // })}
 
  //   fs.readFile(path, 'utf8',(error, lista)=>{

  //     if(error){
  //       throw Error('Hubo un error en else readdir ', error)
  //     }
  //     let filtro = lista.filter(archivo => Path.extname(archivo) == '.md')
  //     console.log('estoy en readdir if  ', filtro)
  //     console.log(lista)
  //   })
  
  // if(!Path.isAbsolute(path)){
  //   path = Path.resolve(path);
  //   console.log('ruta convertida a absoluta ', path);
  // } 
  // if(Path.isAbsolute(path)){
    
  // }
  // // fs.readFile(path, 'utf8', (error, data) => {
  // //   console.log('dirname ', Path.dirname(path)) 
  // //   //Verifica si hay un link
  // //   // if(error){
  // //   //   throw Error('Esta ruta no es válida, intente nuevamente');
  // //   // }
  // //   //verifica si la ruta es relativa 
  // //    if (!error) {
  // //     if(Path.dirname(path) == '.'){
  // //       path = Path.resolve(path);
  // //       console.log('ruta convertida a absoluta ', path);
  // //     } 
  // //     // console.log('data ',data)
  // //   }
  //   //Lee el directorio de cada ruta
    if(path){
      path = Path.resolve(__dirname,path)
      console.log()
      fs.stat(path, (error, data)=>{
        console.log(path)
        if(data.isDirectory()){
          fs.readdir(path, (error, data)=>{
            if(error){
                    throw Error('Hubo un error en if de stat de readdir ', error)
                  }
                  let filtrar= data.filter((documento) =>
                     Path.extname(documento) == '.md'
                  )
                  filtrar = filtrar.join(data, filtrar)
                  console.log('es directorio ', filtrar)
                  fs.readFile(filtrar, 'utf8', (error, data)=>{
                    if(error){
                      console.log('Hubo un error')
                    }
                    console.log(data)
                  })
          })
        }
      })
      fs.readdir(Path.dirname(path), (error, data)=>{ // este me lee todos los archivos md que estén en carpeta, no me accede al
      //directorio (ruta absoluta)
       // fs.readdir(path, (error, data)=>{ //este me lee solo los directorios
        if(error){
          console.log('estoy en readdir error ',error)
        }
        else if (!error) {
          // console.log('antes en resolve  ', path)
          // console.log('path ', Path.dirname(path))
              
              // console.log('data ',data)
              if(Path.dirname(path) == '.'){
                console.log('antes en readdir  ', path, data) //está en formato de array
                // data.forEach(archivo => console.log(archivo)) //está en formato de lista
                let filtro = data.filter((archivo) => Path.extname(archivo) == '.md') //está en formato de lista
                console.log('estoy en readdir if  ', filtro) //está en formato de array
              }else {
                let filtro = data.filter(archivo => Path.extname(archivo) == '.md')
                console.log('estoy en readdir if  ', filtro)
              }
            }
      })}
    }
//   );
// };

// module.exports = {
//   mdLinks: mdLinks,
// };



// fs.readFile('README.md', 'utf-8', (error, contenido)=>{
// if(error){
//     throw Error('Se encontró un error')
// }else{
//     // console.log(contenido)
// }
// })

// console.log(Path.extname('README.md')) //extensión del archivo
// console.log(Path.resolve('/etc', 'README.md')) // me convierte a ruta absoluta indicándole dos parámetros. Ej: C:\etc\README.md
// console.log(Path.resolve('README.md')) // indica ruta absoluta desde la raíz. Ej: C:\Users\1531n\BOG005-md-links\README.md
// console.log(Path.join('/home/Laboratoria/', './test')) //uno dos segmentos de rutas. Ej: \home\Laboratoria\test
