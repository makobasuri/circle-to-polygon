const { expect } = require("chai");

exports.shouldBeEqual = function shouldBeEqual(coordinatesA, coordinatesB) {
  expect(coordinatesA.length).to.equal(coordinatesB.length);

  coordinatesA.forEach((cord, cordIndex) => {
    cord.forEach((value, valueIndex) => {
      const expectedValue = coordinatesB[cordIndex][valueIndex];
      expect(value).to.be.closeTo(expectedValue, 0.00001);
    });
  });
};
