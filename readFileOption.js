const fetch = require("node-fetch");

let readFileOptions = (newPath) => {
  let iteraLink = newPath.map((link) => {
    return fetch(link.href)
      .then((result) => {
        if (result.status >= 200 && result.status < 400) {
          link["status"] = result.status;
          link["statusText"] = result.statusText;
          return link;
        } else if (result.status >= 400) {
          link["status"] = result.status;
          link["statusText"] = "Fail";
          return link;
        }
      })
      .catch((error) => {
        return error;
      });
  });
  return Promise.all(iteraLink);
};

module.exports = {
  readFileOptions,
};
