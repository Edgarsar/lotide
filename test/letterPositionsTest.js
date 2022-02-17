const assert = require('chai').assert;

const letterPositions = require("../letterPositions");

describe("#letterPositions", () => {
  it("returns [1] for an input 'hello' for index position 'e'", () => {
    assert.deepEqual(letterPositions("hello").e, [1])
  });
  it("returns [2, 3] for an input 'hello' for index position 'l'", () => {
    assert.deepEqual(letterPositions("hello").l, [2, 3])
  });
});
