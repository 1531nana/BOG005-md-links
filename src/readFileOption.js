const fetch = require("node-fetch");

let readFileOptions = (newPath) => {
  let iteraLink = newPath.map((file) => {
    return fetch(file.href)
      .then((link) => {
        if (link.status >= 200 && link.status < 400) {
          file["status"] = link.status;
          file["statusText"] = link.statusText;
          return file;
        } else if (link.status >= 400) {
          file["status"] = link.status;
          file["statusText"] = "Fail";
          return file;
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
