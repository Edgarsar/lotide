const findKey = require("../findKey");

const assert = require("chai").assert;

describe("#findkey", () => {

  it("should return 'noma'", () => {
    const movieNames = {
      "Blue Hill": { stars: 1 },
      "Akaleri": { stars: 3 },
      "noma": { stars: 2 },
      "elBulli": { stars: 3 },
      "Ora": { stars: 2 },
      "Akelarre": { stars: 3 }
    };
    const cb = x => x.stars === 2;
    assert.strictEqual(findKey(movieNames, cb), "noma");
  });
  it("returns undefined if no key value is found", () => {
    const movieNames = {
      "Blue Hill": { stars: 1 },
      "Akaleri": { stars: 3 },
      "noma": { stars: 2 },
      "elBulli": { stars: 3 },
      "Ora": { stars: 2 },
      "Akelarre": { stars: 3 }
    };
    const cb = x => x.stars === 6;
    assert.strictEqual(findKey(movieNames, cb), undefined);
  });

});