const mockDirecMdlinksFalse = [
    {
      href: ["https://developer.mozilla.org/es/docs/Web/JavaScrip"],
      text: "expresiones regulares (`RegExp`)",
      file: "C:\\Users\\1531n\\BOG005-md-links\\test\\carpeta2\\leeme.md",
    },
    {
      href: ["https://www.youtube.com/watch?v=Lub5qOmY4JQ"],
      text: "recurso",
      file: "C:\\Users\\1531n\\BOG005-md-links\\test\\carpeta2\\leeme.md",
    },
  ];
  
  const mockDirecMdlinksTrue = [
    {
      href: ["https://developer.mozilla.org/es/docs/Web/JavaScrip"],
      text: "expresiones regulares (`RegExp`)",
      file: "C:\\Users\\1531n\\BOG005-md-links\\test\\carpeta2\\leeme.md",
      status: 404,
      statusText: "Fail",
    },
    {
      href: ["https://www.youtube.com/watch?v=Lub5qOmY4JQ"],
      text: "recurso",
      file: "C:\\Users\\1531n\\BOG005-md-links\\test\\carpeta2\\leeme.md",
      status: 200,
      statusText: "OK",
    }
  ];
  
 module.exports = {
    mockDirecMdlinksFalse,
    mockDirecMdlinksTrue, 
 }

