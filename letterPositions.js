
const assertArraysEqual = require("./assertArraysEqual");

const letterPositions = function(sentence) {
  //define a new empty object
  const results = {};
  // remove white spaces
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


module.exports = letterPositions;