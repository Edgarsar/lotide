// return the middle-most element(s)
const middle = function(array) {

  let result = [];

  const midIndex = Math.floor(array.length / 2);// finds largest integer less than or equal to the middle index

  if (array.length <= 2) {  // if an array has less then two elements then return empty array(no miidle)
    return result;
  }
  // checks if the array length is odd then push the midile index element of the array to the result variable
  if (array.length % 2 !== 0) {
    result.push(array[midIndex]);
  } else {
    result.push(array[midIndex - 1], array[midIndex]); //otherwise push the previous and the midile index elements
    return result;
  }
};




module.exports = middle;
