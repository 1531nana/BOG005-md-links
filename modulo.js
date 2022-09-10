const { readdirec } = require("./readDir");
const {readFile} = require("./readFile");
const { readFileOptions } = require("./readFileOption");
// const {validate} = require('./validate')

let mdLinks = (path, options = {validate: false}) => {
  // let resultFetch;
  let linksMd;
  let arrayMd = readdirec(path)
  linksMd = readFile(arrayMd).then(res => {return linksMd = (res[0].flat())})
  return new Promise ((resolve, reject) =>{
   if(options.validate == false){
    // if(!options.validate){
  // readFile(linksMd)
  (resolve(linksMd))
  }else if(options.validate === true){
      // resultFetch = resolve(readFileOptions(linksMd))
      readFileOptions(linksMd)
      // validate(resultFetch)
    }
  })
};



module.exports = {
  mdLinks
};
