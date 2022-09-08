const { readdirec } = require("./readDir");
const {readFile} = require("./readFile");
const { readFileOptions } = require("./readFileOption");

let mdLinks = (path, options = {validate: false}) => {
  return new Promise ((resolve, reject) =>{
   if(!options.validate){
     let arrayMd = readdirec(path)
    let linksMd = readFile(arrayMd).then(res => {return linksMd = res.flat()})
    let options = readFileOptions(linksMd)
    // let linksMd = readFile(arrayMd).then(res => linksMd = console.log(res.flat()))
    // linksMd.then(res => console.log('res ',res))
    }else  if(options.validate){
    }
  })
};



module.exports = {
  mdLinks
};
