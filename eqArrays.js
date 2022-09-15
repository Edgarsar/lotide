// Takes in 2 arrays and returns true if the arrays are equal and false otherwise.
const eqArrays = function (arrOne, arrTwo) {
  for (let i = 0; i < arrOne.length; i++) {
    for (let j = 0; j < arrTwo.length; j++) {
      if (Array.isArray(arrOne[i]) && Array.isArray(arrTwo[j])) {
        return eqArrays(arrOne[i], arrTwo[j])
      }

    }
  }

  return Array.isArray(arrOne) &&   //determines whether the arrOne is an Array
    Array.isArray(arrTwo) &&        //determines whether the arrTwo is an Array
    arrOne.length === arrTwo.length &&  // checks if the number of elements in arrOne are equal to the number of elements in arrayTwo
    arrOne.every((val, index) => val === arrTwo[index]);  //checks if all elements in the arrOne and arrayTwo are identical

};

module.exports = eqArrays;


