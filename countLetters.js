// Takes in a sentence and returns a count of each of the letters in the sentence.
const countLetters = function(str) {

  const result = {};
  // remove white spaces
  const newStrings = str.replace(/ /g, "");

  //loop over the string
  for (const newString of newStrings) {
    if (result[newString]) {
      // increment each key value by 1 by occurrences for the string character
      result[newString] += 1;
    } else {
      // create a key in the result object with the each character and assign the value 1
      result[newString] = 1;
    }
  }
  return result;
};

module.exports = countLetters;

