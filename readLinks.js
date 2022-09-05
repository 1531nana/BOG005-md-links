const fs = require("fs");
const Path = require("path");

let regExpLinks = new RegExp ('((https?:\/\/)|(https?:\/\/))\.?[a-zA-Z0-9-_.]+\/([a-zA-Z0-9-_./?=#]?)+', 'g')
// let regExpLinks = new RegExp ('((https?:\/\/)([w]){3}|(https?:\/\/))\.?[a-zA-Z0-9-_.]+\/([a-zA-Z0-9-_./?=#]?)+', 'gim')
let regExpText = /([\[][(\S)]+[( \S?)]+\]\(ht)+/g
// let regExpText = /([\[][(\S)]+[( \S?)]+\]\(https?|[w]{3})+/g

let readLinks = (newPath, options) =>{
   let acumLink = [];
   return new Promise((resolve, reject)=>{
        if(newPath){
            let links = newPath.match(regExpLinks)
            // links.slice(1, links.indexOf(']'))
            resolve(links)
        }else{
            reject(console.log(err))
        }
        })
  }

  let readText = (newPath, options) =>{
    let acumLink = [];
    return new Promise((resolve, reject)=>{
         if(newPath){
             let text = newPath.match(regExpText)
            // text.slice(1, text.indexOf(']'))
                 console.log(resolve(text))
         }else{
             reject(console.log(err))
         }
     })
   }



  module.exports = {
    readLinks, 
    readText
  }
  