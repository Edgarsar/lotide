const countLetters = require("../countLetters");

const assert = require("chai").assert;

describe("#countLetters", () => {

  it("returns '{ e: 1, d: 1, g: 1, a: 1, r: 1 }' for an input of 'edgar'", () => {

    assert.deepEqual(countLetters("edgar"), { e: 1, d: 1, g: 1, a: 1, r: 1 })

  });

  it ("returns '{ h: 1, e: 1, l: 2, o: 1}' for 'hello' ",()=>{

    assert.deepEqual(countLetters("hello"),{ h: 1, e: 1, l: 2, o: 1})
  })



})