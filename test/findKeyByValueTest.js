const assert = require('chai').assert;

const findKeyByValue = require("../findKeyByValue");

describe("#findKeyByValue", () => {
  it("returns 'drama'  for bestTVShowsByGenre object input and 'The Wire' key", () => {
    const bestTVShowsByGenre = {
      drama: "The Wire",
      comedy: "Brooklyn Nine-Nine",
      sciFi: "The Expanse"
    };
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama")

  });

});