const {readFile} = require('./readFile')
const fs = require("fs");
const Path = require("path");
const { mdLinks } = require("./modulo.js");
const { readLinks, readText } = require("./readLinks.js");
const fetch = require('node-fetch');
const yargs = require('yargs');
const { URL } = process.env
// console.log('URL ', process.env)
// const { readdirec } = require('./readDir');

let readFileOptions = (newPath, options)=> {
    console.log('soy options ',typeof newPath)
    // fetch(URL + newPath).then(resp => console.log('soy options ', resp))
}


module.exports = {
    readFileOptions
}