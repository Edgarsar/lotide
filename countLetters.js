const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }

};


const countLetters = function(str) {

  const result = {};

  const newStrings = str.replace(/ /g, "");
  for (const newString of newStrings) {
    if (result[newString]) {
      result[newString] += 1;
    } else {
      result[newString] = 1;
    }
  }
  return result;
};

const result1 = countLetters("lighthouse in the house");
assertEqual(result1["l"], 1);
assertEqual(result1["h"], 4);
assertEqual(result1["g"], 2);
assertEqual(result1["w"], 1);


