let stat = (arg) => {
  let acumLink = 0;
   return new Promise((resolve, reject) => {
    arg.then((res) =>
      res.map((value) => {
        let large = value.map((link) =>
          link.then((resul) => {
            if (resul.href) {
              return (acumLink += 1);
            }
          })
        );
        resolve(` Total: ${large.length} \n Unique: ${large.length}`);
      })
    );
  });
};

let broken = (arg) => {
  let acumBroken = 0;
  let arrayBroken = [];
  return new Promise((resolve, reject) => {
    arg.then((res) =>
      res.map((value) => {
        let larg = value.map((link) =>
          link.then((resul) => {
            if (resul.status === "Fail") {
              acumBroken += 1;
            }
            arrayBroken.push(acumBroken);
            resolve(
              ` Broken: ${arrayBroken.length}`
            );
          })
        );
      })
    );
  });
};

module.exports = {
  stat,
  broken,
};
