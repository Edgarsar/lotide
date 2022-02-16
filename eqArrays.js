//tests for equality between two arrays
const eqArrays = function(arrOne, arrTwo) {
  return Array.isArray(arrOne) &&   //determines whether the arrOne is an Array
    Array.isArray(arrTwo) &&        //determines whether the arrTwo is an Array
    arrOne.length === arrTwo.length &&  // checks if the number of elements in arrOne are equal to the number of elements in arrayTwo
    arrOne.every((val, index) => val === arrTwo[index]);  //tests whether all elements in arrOne and arratTwo are the same

};

module.exports = eqArrays;


