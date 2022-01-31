// function that return a subset of a given array, removing unwanted elements
const without = function(source, itemsToRemove) {
  return source.filter(function(index) {
    return itemsToRemove.indexOf(index) < 0;


  });

};
// test case to make sure that the original array is not modified
const eqArrays = function(arrOne, arrTwo) {
  return Array.isArray(arrOne) &&
    Array.isArray(arrTwo) &&
    arrOne.length === arrTwo.length &&
    arrOne.every((val, index) => val === arrTwo[index]);

};
const assertArraysEqual = function(arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo)) {
    console.log(`✅✅✅Assertion Passed:`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed:`);
  }

};

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

