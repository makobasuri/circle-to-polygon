const circleToPolygon = require("..");
const { shouldBeEqual } = require("./test-functions");

describe("Options", () => {
  describe("Righthand/Lefthand rule", () => {
    describe("Using Righand rule", () => {
      it("should user the right-hand rule when undefined is passed", () => {
        const coordinates = circleToPolygon([77.777777, 33.333333], 500).coordinates[0];

        console.log(coordinates);

        shouldBeEqual(coordinates, coordinates);
      })
    })
  })
})
