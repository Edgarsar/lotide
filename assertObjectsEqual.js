
// function checks two arrays equality
const eqArrays = function(arrOne, arrTwo) {
  return Array.isArray(arrOne) &&
    Array.isArray(arrTwo) &&
    arrOne.length === arrTwo.length &&
    arrOne.every((val, index) => val === arrTwo[index]);

};
// function checks two objects equality
const eqObjects = function(object1, object2) {

  const key1 = Object.keys(object1);

  const key2 = Object.keys(object2);

  if (key1.length !== key2.length) {
    return false;
  }
  for (const key of key1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if
    (object1[key] !== object2[key]) {
      return false;
    }
  }


  return true;
};

const assertObjectsEqual = function(actual, expected) {

  const inspect = require('util').inspect;

  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }


};
assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' });
assertObjectsEqual({ a: '1', b: [2] }, { b: [2, 4], a: '1' });
