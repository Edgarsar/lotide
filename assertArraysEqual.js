
const eqArrays = require("./eqArrays");


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


