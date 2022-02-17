const map = require("../map");

const assert = require("chai").assert;

describe("#map", () => {
  it("returns array ['edgar'] to uppercase", () => {
    assert.deepEqual(map(["edgar"], e => e.toUpperCase()), ["EDGAR"]);
  });
});