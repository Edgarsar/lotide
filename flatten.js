
//function which will take in an array containing nested arrays, and return a "flattened" version of the array.
const flatten = function(array) {

  let result = [];
  //loop over the array
  array.forEach(element => {
    // checks if the element is an array
    if (Array.isArray(element)) {   //the recursive case
      // if true then use recursion and concatenate the result
      result = result.concat(flatten(element));
      //the base case is when the element is not an array
    } else {
      result.push(element);  //if element is not an array then push the element to the result
    }
  });

  return result;

};


module.exports = flatten;








