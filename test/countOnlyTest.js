const assert = require('chai').assert;

const countOnly = require('../countOnly');

describe("#countOnly", () => {
  it("returns { Fang: 2, Jason: 1}", () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    const itemToCounts = { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false };

    assert.deepEqual(countOnly(firstNames,itemToCounts), { Fang: 2, Jason: 1});
  });
});
