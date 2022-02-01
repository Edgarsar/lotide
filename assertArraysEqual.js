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
