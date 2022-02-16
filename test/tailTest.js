const assert = require("chai").assert;

const tail = require("../tail");

describe("#tail", () => {

  it("return [2,3] for [1,2,3", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
  it("returns ['World'] for ['Hello', 'World']", () => {
    assert.deepEqual(tail(["Hello", "World"]), ["World"]);
  });
  it("returns length 2 for ['Hello' ,'Lighthouse', 'Labs']", () => {
    const actual = tail(["Hello", "Lighthouse", "Labs"]);
    const expected = 2;
    assert.strictEqual(actual.length, expected);
  });
  it("returns 'Lighthouse' as the firts element of ['Hello' ,'Lighthouse', 'Labs'] ", () => {
    const actual = tail(["Hello", "Lighthouse", "Labs"]);
    const expected = "Lighthouse";
    assert.strictEqual(actual[0], expected);
  });
});



