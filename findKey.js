const assertEqual = require("./assertEqual");

// function takes in an object and a callback
// it should scan the object and return the first key for which the callback returns a truthy value
// if no key is found, then it should return undefined
const findKey = (object, callback) => {
  //returns an array of a given object's property names
  const Keys = Object.keys(object);
  //loop over the property names
  for (const key of Keys) {
    // if callback function has truthy value then stop the loop and return the key
    if (callback(object[key])) {
      return key;
    }
  }
  //if no key is found
  return undefined;
};

module.exports = findKey;

const result1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2);

const result2 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 3);



assertEqual(result1, "noma");
assertEqual(result2, "Akaleri");