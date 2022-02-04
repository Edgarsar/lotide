const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};
const results1 = map(words, word => word.toUpperCase());
// console.log(results1);




const eqArrays = function(arrOne, arrTwo) {
  return Array.isArray(arrOne) &&
    Array.isArray(arrTwo) &&
    arrOne.length === arrTwo.length &&
    arrOne.every((val, index) => val === arrTwo[index]);

};
const assertArraysEqual = function(arrayOne, arrayTwo) {

  const inspect = require('util').inspect;

  if (eqArrays(arrayOne, arrayTwo)) {
    console.log(`✅✅✅Assertion Passed: ${inspect(arrayOne)} === ${inspect(arrayTwo)}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${inspect(arrayOne)} !== ${inspect(arrayTwo)}`);
  }
};
assertArraysEqual(results1, ['GROUND', 'CONTROL', 'TO', 'MAJOR', 'TOM']);