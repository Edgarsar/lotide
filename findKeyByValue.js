const assertEqual = require("./assertEqual");
// function which takes in an object and a value
// It should scan the object and return the first key which contains the given value
// If no key with that given value is found, then it should return undefined.
const findKeyByValue = function(object, value) {
  //returns an array of a given object's property names
  let keys = Object.keys(object);
  //loop over property names
  for (const key of keys) {
    //if property name match with the value then return the key
    if (object[key] === value) {
      return key;
    }
  }
  //if not found return undefined
  return undefined;
};

const bestTVShowsByGenre = {
  drama: "The Wire",
  comedy: "Brooklyn Nine-Nine",
  sciFi: "The Expanse"
};


assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");


module.exports = findKeyByValue;