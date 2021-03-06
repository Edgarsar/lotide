const eqObjects = require("./eqObjects");
// Takes in 2 objects and returns true if they are equal and false otherwise.
const assertObjectsEqual = function(actual, expected) {
  //returns a string representation of an object
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }


};

module.exports = assertObjectsEqual;


