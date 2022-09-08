
let regExpLinks = new RegExp(
  "((https?://)|(https?://)).?[a-zA-Z0-9-_.]+/([a-zA-Z0-9-_./?=#]?)+",
  "g"
);
let regExpText = /([\[][(\S)]+[( \S?)]+\]\(ht)+/g;

let readLinks = (newPath, options) => {
  return new Promise((resolve, reject) => {
    if (newPath) {
      let links = newPath.match(regExpLinks);
      resolve(links);
    } else {
      reject(console.log(err));
    }
  });
};

let readText = (newPath, options) => {
  return new Promise((resolve, reject) => {
    if (newPath) {
      let text = newPath.match(regExpText);
      resolve(text);
    } else {
      reject(console.log(err));
    }
  });
};


module.exports = {
  readLinks,
  readText,
};
