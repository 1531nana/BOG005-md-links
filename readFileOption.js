const fetch = require("node-fetch");
const { readFile } = require("./readFile");

let readFileOptions = (newPath, options) => {
  let iteraLink;
  let optionFecth = new Promise((resolve, reject) => {
    newPath
      .then((res) => {
        iteraLink = res.map((link) => {
          return fetch(link.href).then((result) => {
            if (result.status >= 200 && result.status < 400) {
              link["status"] = result.status;
              link["statusText"] = result.statusText;
              return link;
            } else if (result.status >= 400) {
              link["status"] = result.status;
              link["statusText"] = "Fail";
              return link;
            }
          });
        });
        resolve(iteraLink);
      })
      .catch((error) => {
        return error;
      });
  });
  return Promise.all([optionFecth]);
  // return iteraLink
};

module.exports = {
  readFileOptions,
};
