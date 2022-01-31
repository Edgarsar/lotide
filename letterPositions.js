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



const letterPositions = function(sentence) {
  const results = {};
  const newStrings = sentence.replace(/ /g, "");
  for (let i = 0; i < newStrings.length; i++) {
    let el = newStrings[i];

    //if it is not true, that is the element is not there in the result
    //we initialize in the array
    if (!results[el]) {
      results[el] = [i];
    } else { //if the element is already there in the result, and then we just add index to the Array
      results[el].push(i);
    }
  }
  return results;
};

assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);
