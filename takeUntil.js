// Takes in an array and callback and returns a slice of the array based on the criteria specified in the callback.
const takeUntil = function(array, callback) {
  //define a new empty object
  let result = [];
  //loop over the array
  for (const arr of array) {
    //when callback is true then negate to return false
    if (!callback(arr)) {
      result.push(arr);
    } else {
      // stop the loop and return result
      return result;
    }
  }
};


module.exports = takeUntil;



