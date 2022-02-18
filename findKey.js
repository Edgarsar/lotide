// Takes in an object and callback and returns the first key that meets the criteria specified in callback.
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

