const assertArraysEqual = require("./assertArraysEqual");

const takeUntil = function(array, callback) {
  //define a new empty object
  let result = [];
  //loop over the array
  for (const arr of array) {
    //when callback is true then negate to return false
    if (!callback(arr)) {
      result.push(arr);
    } else {
      // stop the loop and return result
      return result;
    }
  }
};


module.exports = takeUntil;



const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);


console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');

assertArraysEqual(results1, [1, 2, 5, 7, 2]);
assertArraysEqual(results2, ["I've", 'been', 'to', 'Hollywood']);