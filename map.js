const words = ["ground", "control", "to", "major", "tom"];
// Takes in an array and a callback and returns a new array based on the results of the callback on each item in the array.
const map = function(array, callback) {
  //define a new empty array
  const results = [];
  //loop over the words array
  for (let item of array) {
    // invoke callback function and push into the resualt
    results.push(callback(item));
  }
  return results;
};


module.exports = map;

