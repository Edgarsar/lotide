const assertArraysEqual = require("./assertArraysEqual");

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  //define a new empty array
  const results = [];
  //loop over the words array
  for (let item of array) {
    // invoke callback function and push into the resualt
    results.push(callback(item));
  }
  return results;
};
//callback function capitalize all elements in the given array
const results1 = map(words, word => word.toUpperCase());
const results2 = map(words, element => element + "#");

module.exports = map;

// assertArraysEqual(results1, ['GROUND', 'CONTROL', 'TO', 'MAJOR', 'TOM']);
// assertArraysEqual(results2, ["ground#", "control#", "to#", "major#", "tom#"]);
