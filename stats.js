const { readFileOption } = require("./readFileOption.js");

let stat = (arg) => {
  let acumLink = 0;
  let array = [];
  
  return new Promise ((resolve, reject) => {
      arg.then((res) =>
        res.map((value) => {
          let large = value.map((link) =>
            link.then((resul) => {
              if (resul.href) {
                acumLink += 1;
              }
              return array.push(acumLink);
            })
          );
           resolve(` Total: ${large.length} \n Unique: ${large.length}`);
        //   return console.log(` Total: ${large.length} \n Unique: ${large.length}`);
        })
      );
  })
};

module.exports = {
  stat,
};
