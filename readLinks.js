const fs = require("fs");
const Path = require("path");

let regExpLinks = new RegExp ('((https?:\/\/)|(https?:\/\/))\.?[a-zA-Z0-9-_.]+\/([a-zA-Z0-9-_./?=#]?)+', 'g')
let regExpText = /([\[][(\S)]+[( \S?)]+\]\(ht)+/g

let readLinks = (newPath, options = {validate: false, stat: false}) =>{
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
  