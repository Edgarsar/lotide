const assertEqual = require("./assertEqual");

const eqArrays = require("./eqArrays");

// Takes in 2 objects and return true if they are equal and false otherwise.
const eqObjects = function(object1, object2) {
  //returns an array of object1 property names
  const key1 = Object.keys(object1);
  //returns an array of object2 property names
  const key2 = Object.keys(object2);
  //check if they have the same number of keys
  if (key1.length !== key2.length) {
    return false;
  }
  for (const key of key1) {
    //check if the key values are arrays
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      // compare them using eqArrays function
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
      //check if the key has identical values(primitive types)
    } else if
      (object1[key] !== object2[key]) {
      return false;
    }
  }


  return true;
};

module.exports = eqObjects;



