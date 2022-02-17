const eqObjects = require('../eqObjects');

const assert = require("chai").assert

describe("#eqObjects", () => {
  it("returns true for an input of '{c:1 , d: ['2' ,3]'and '{ d: ['2', 3], c: '1' }'", () => {
    const cd = { c: "1", d: ["2", 3] };
    const dc = { d: ["2", 3], c: "1" };
    assert.strictEqual(eqObjects(cd, dc), true);
  });
  it("returns false for an input of '{c:1 , d: ['2' ,3]' and '{ c: '1', d: ['2', 3, 4] }'", () => {
    const cd = { c: "1", d: ["2", 3] };
    const cd2 = { c: "1", d: ["2", 3, 4] };
    assert.strictEqual(eqObjects(cd, cd2), false);
  });

});