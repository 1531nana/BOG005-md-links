const {mdLinks} = require('./modulo.js');
// const {readFile} = require('./readFile');
// const {readdirec} = require('./readDir.js')
// const {readLinks, readText} = require('./readLinks.js');
// const {readFileOptions} = require('./readFileOption')
  
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

mdLinks(process.argv[2])
// readdirec(mdLinks(process.argv[2]));
// readLinks(mdLinks(process.argv[2]))
// readText(mdLinks(process.argv[2]))
// readFile(mdLinks(process.argv[2]));
// readFileOptions(mdLinks(process.argv[2]))
