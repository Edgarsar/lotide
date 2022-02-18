const without = require("../without");

const assert = require("chai").assert;

describe("#without", () => {

  it("returns [2, 3] for an input of [1, 2, 3], [1]", () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });
  it("returns ['1', '2'] for an input of ['1', '2', '3'], [1, 2, '3']", () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
  });
  it("should not modify the original array that is passed in", () => {
    const words = ["hello", "world", "lighthouse"];
    without(words, ["lighthouse"]);
    assert.deepEqual(words, ["hello", "world", "lighthouse"]);
  });
});


