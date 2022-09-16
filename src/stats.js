let stat = (arg) => {
  let links = [];
  let linksBroken = [];
  arg.map((resul) => {
    if (resul.statusText === "Fail") {
      linksBroken.push(resul.statusText);
    }
    links.push(resul.href);
  });
  return {
    Total: arg.length,
    Unique: new Set(links.flat()).size,
    Broken: linksBroken.length,
  };
};

module.exports = {
  stat,
};
