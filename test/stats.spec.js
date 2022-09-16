const { mdLinks } = require("../src/index.js");
const { stat } = require("../src/stats.js");
const { mockStats } = require("../__mocks__/mockData.js");

const pathRelative = "../test/carpeta2";


describe("stats", () => {
    it("should be a stadistic of total, unique, broken", () => {
      return mdLinks(pathRelative, { validate: true }).then((data) => {
        expect(stat(data)).toEqual(mockStats);
      });
    });
  });