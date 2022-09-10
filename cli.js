#!/usr/bin/env node

const { mdLinks } = require("./modulo");
const { readFileOptions } = require("./readFileOption");
const [,, ...args] = process.argv
// const { readFileOptions } = require("./readFileOption");

let validate = (args) =>{
new Promise((resolve, reject) => {
    if (
      (args[1]) === "--validate" && (args[2]) === "--stats" ||
      (args[1]) === "--stats" && (args[2]) === "--validate"
    ) {
      console.log("estamos los dos");
    } else if (args[1] === "--stats") {
      console.log("stats");
    } else if (args[1] === "--validate") {
      resolve(mdLinks(args[0], {validate : true}))
    } else {
      mdLinks(args[0], {validate : false}).then(res => console.log(res))
      // console.log("estoy en else");
    }
})
}

validate(args)
module.exports = {
//   validate,
};
