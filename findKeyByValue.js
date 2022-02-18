// Takes in an object and a value and returns the first key that corresponds to that value.
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


module.exports = findKeyByValue;