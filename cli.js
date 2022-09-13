#!/usr/bin/env node

const { mdLinks } = require("./index");
const { stat} = require("./stats");
const [, , ...args] = process.argv;

let validate = (args) => {
  new Promise((resolve, reject) => {
    if (
      (args[1] === "--validate" && args[2] === "--stats") ||
      (args[1] === "--stats" && args[2] === "--validate")
    ) {
      mdLinks(args[0], { validate: true }).then((res) => {
        console.log(
          ` Total: ${stat(res).Total}, \n Unique: ${
            stat(res).Unique
          }, \n Broken: ${stat(res).Broken}`
        );
      });
    } else if (args[1] === "--stats") {
      mdLinks(args[0], { validate: true }).then((res) => {
        console.log(
          ` Total: ${stat(res).Total}, \n Unique: ${stat(res).Unique}`
        );
      });
    } else if (args[1] === "--validate") {
      mdLinks(args[0], { validate: true }).then((res) => console.log(res));
    } else if (args[0] && args[1] === undefined) {
      mdLinks(args[0], { validate: false }).then((res) => console.log(res));
    } else {
      console.log(`Comando incorrecto, intenta con --validate o --stats`);
    }
  });
};

validate(args);

module.exports = {};
