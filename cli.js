#!/usr/bin/env node

const { mdLinks } = require("./modulo");
const { readFileOptions } = require("./readFileOption");
const { stat } = require("./stats");
const [, , ...args] = process.argv;
// const { readFileOptions } = require("./readFileOption");

let validate = (args) => {
  new Promise((resolve, reject) => {
    if (
      (args[1] === "--validate" && args[2] === "--stats") ||
      (args[1] === "--stats" && args[2] === "--validate")
    ) {
      console.log("estamos los dos");
    } else if (args[1] === "--stats") {
      stat(mdLinks(args[0], { validate: true })).then((res) =>
        console.log(res)
      );
      // readFileOptions(mdLinks(args[0], {validate: true})).then(res => {(stat(res.href))})
      console.log("stats");
    } else if (args[1] === "--validate") {
      console.log("validate: true");
      mdLinks(args[0], { validate: true }).then((res) => {
        res.map(
          (value) =>
            value.map((link) => link.then((resul) => console.log(resul)))
          // value)((value) => console.log("fetch ", value));
        );
      });
      // resolve(mdLinks(args[0], {validate : true})).then(res => console.log('acá ',res))
    } else {
      mdLinks(args[0], { validate: false }).then((res) => console.log(res));
      // console.log("estoy en else");
    }
  });
};

validate(args);
module.exports = {
  //   validate,
};
