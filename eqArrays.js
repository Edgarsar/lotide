// Takes in 2 arrays and returns true if the arrays are equal and false otherwise.
const eqArrays = function (arrOne, arrTwo) {

  if (arrOne === null || arrTwo === null)
    return false;
  if (arrOne.length !== arrTwo.length)
    return false;
  for (let i = 0; i < arrOne.length; i++) {
    if (Array.isArray(arrOne[i]) && Array.isArray(arrTwo[i])) {
      if (!eqArrays(arrOne[i], arrTwo[i])) {
        return false;
      }
    } else if (arrOne[i] !== arrTwo[i]) {
      return false;
    }

  }
  return true;
}


module.exports = eqArrays;


