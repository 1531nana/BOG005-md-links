const fetch = require("node-fetch");

const fetchMock = () => {
  return fetch(
    "https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions"
  ).then((data) => data);
};

module.exports = {
  fetchMock,
};
