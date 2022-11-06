const { mdLinks } = require("../src/index.js");
const {
  mockMdlinksFalse,
  mockMdlinksTrue,
} = require("../__mocks__/mockData.js");
const {
  mockDirecMdlinksFalse,
  mockDirecMdlinksTrue,
} = require("../__mocks__/mockDirec.js");


const pathAbsolute = "C:\\Users\\1531n\\BOG005-md-links\\test\\pruebaTest.md";
const pathRelative = "../test/carpeta2";


describe("mdLinks", () => {
  it("should be a path absolute with href, text and file", () => {
    return mdLinks(pathAbsolute, { validate: false }).then((data) => {
      expect(data).toStrictEqual(mockMdlinksFalse);
    });
  });

  it("should be a path absolute with href, text, file, status and statusText", () => {
    return mdLinks(pathAbsolute, { validate: true }).then((data) => {
      expect(data).toStrictEqual(mockMdlinksTrue);
    });
  });
});

describe("mdLinks", () => {
  it("should be a path relative with href, text and file", () => {
    return mdLinks(pathRelative, { validate: false }).then((data) => {
      expect(data).toEqual(mockDirecMdlinksFalse);
    });
  });

  it("should be a path relative with href, text  file, status and statusText", () => {
    return mdLinks(pathRelative, { validate: true }).then((data) => {
      expect(data).toEqual(mockDirecMdlinksTrue);
    });
  });
});

describe('mdLinks', ()=>{
    it('should be a throw Error if the path is undefined', () => {
        return expect(mdLinks).toThrow();
      });
})