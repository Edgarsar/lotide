const takeUntil = require("../takeUntil");

const assert = require("chai").assert;

describe("#takeUntil", () => {

  it("returns [1, 2, 5, 7, 2] for an input of [1, 2, 5, 7, 2, -1, 2, 4, 5]", () => {
    const data = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    const cb = x => x < 0;
    assert.deepEqual(takeUntil(data, cb), [1, 2, 5, 7, 2]);
  });
  it("returns ['I', 'have', 'been', 'to', 'Hollywood'] for ['I','have', 'been', 'to', 'Hollywood', ',', 'I've', 'been', 'to', 'Redwood']", () => {

    const data = ["I", "have", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    const cb = x => x === ",";
    assert.deepEqual(takeUntil(data, cb), ['I', 'have', 'been', 'to', 'Hollywood']);
  });
});