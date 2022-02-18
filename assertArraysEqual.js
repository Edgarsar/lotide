const eqArrays = require("./eqArrays");
// Takes in 2 arrays and returns true if they are equal and false otherwise.
const assertArraysEqual = function(arrayOne, arrayTwo) {
  //returns a string representation of an object
  const inspect = require('util').inspect;

  if (eqArrays(arrayOne, arrayTwo)) {
    console.log(`✅✅✅Assertion Passed: ${inspect(arrayOne)} === ${inspect(arrayTwo)}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${inspect(arrayOne)} !== ${inspect(arrayTwo)}`);
  }
};


module.exports = assertArraysEqual;


