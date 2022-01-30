// function to  check if two arrays are equal
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
//function which will take in an array containing nested arrays, and return a "flattened" version of the array.
const flatten = function(array) {
  let result = [];
  for (const arr of array) {
    for (let j = 0; j < arr.length; j++) {
      result.push(arr[j]);
    }
    if (!Array.isArray(arr)) {
      result.push(arr);
    }
  }

  return result;
};

const answer = flatten([1, 2, [3, 4], 5, [6]]);
assertArraysEqual(answer , [1, 2, 3, 4, 5, 6]);




