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
  it("returns true for an input of '{ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }'", () => {
    const cd = { a: { z: 1 }, b: 2 };
    const cd2 = { a: { z: 1 }, b: 2 };
    assert.strictEqual(eqObjects(cd, cd2), true);
  });

  it("returns false for an input of '{ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }'", () => {
    const cd = { a: { y: 0, z: 1 }, b: 2 };
    const cd2 = { a: { z: 1 }, b: 2 };
    assert.strictEqual(eqObjects(cd, cd2), false);
  });

  it("returns false for an input of '{ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }'", () => {
    const cd = { a: { y: 0, z: 1 }, b: 2 };
    const cd2 = { a: 1, b: 2 };
    assert.strictEqual(eqObjects(cd, cd2), false);
  });

  it("returns true for an input of '{ a: { z: {c: 2, d: 3} }, b: {x: 3, y: 4} }, { a: { z: {c: 2, d: 3} }, b: {x: 3, y: 4} }'", () => {
    const cd = { a: { y: 0, z: 1 }, b: 2 };
    const cd2 = { a: 1, b: 2 };
    assert.strictEqual(eqObjects(cd, cd2), false);
  });

});