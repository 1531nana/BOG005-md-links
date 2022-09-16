const mockMdlinksFalse = [
  {
    href: ["https://developer.mozilla.org/es/docs/Web/JavaScrip"],
    text: "expresiones regulares (`RegExp`)",
    file: "C:\\Users\\1531n\\BOG005-md-links\\test\\archivo.md",
  },
  {
    href: ["https://www.youtube.com/watch?v=Lub5qOmY4JQ"],
    text: "recurso",
    file: "C:\\Users\\1531n\\BOG005-md-links\\test\\archivo.md",
  },
];

const mockMdlinksTrue = [
  {
    href: ["https://developer.mozilla.org/es/docs/Web/JavaScrip"],
    text: "expresiones regulares (`RegExp`)",
    file: "C:\\Users\\1531n\\BOG005-md-links\\test\\archivo.md",
    status: 404,
    statusText: "Fail",
  },
  {
    href: ["https://www.youtube.com/watch?v=Lub5qOmY4JQ"],
    text: "recurso",
    file: "C:\\Users\\1531n\\BOG005-md-links\\test\\archivo.md",
    status: 200,
    statusText: "OK",
  }
];

const mockStats = {
  Total: 2,
  Unique: 2,
  Broken: 1
}

// const mockError = throw Error("Debe ingresar una ruta")

module.exports = {
  mockMdlinksFalse,
  mockMdlinksTrue,
  mockStats
};
