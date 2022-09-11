const { readdirec } = require("./readDir");
const {readFile} = require("./readFile");
const { readFileOptions } = require("./readFileOption");
// const {validate} = require('./validate')

let mdLinks = (path, options = {validate: false}) => {
  let arrayMd = readdirec(path)
  let linksMd = readFile(arrayMd).then(res => {return linksMd = (res[0].flat())})
  return new Promise ((resolve, reject) =>{
   if(options.validate == false){
    // if(!options.validate){
  // readFile(linksMd)
  (resolve(linksMd))
  }else if(options.validate === true){
      // resultFetch = resolve(readFileOptions(linksMd))
    resolve(readFileOptions(linksMd))
    // .then((res) => {
    //   res.map(value => value.map(link => link.then(resul => console.log(resolve(resul)))))})
      // .then(res => {console.log('mdlink ',resolve(res))})
      // validate(resultFetch)
    }
  })
};



module.exports = {
  mdLinks
};
