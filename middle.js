
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

// return the middle-most element(s)
const middle = function(array) {
  let result = [];
  const midIndex = Math.floor(array.length / 2);

  if (array.length <= 2) {
    return result;
  }

  if (array.length % 2 !== 0) {
    result.push(array[midIndex]);
  } else {
    result.push(array[midIndex - 1], array[midIndex]);
  }
  return result;
};


assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4, 5]);
