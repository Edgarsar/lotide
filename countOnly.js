// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
//The function should report back how many instances of each string were found in the allItems array of strings
//function countOnly needs to return a proper report on all the strings found in the input array, and their respective counts.
const countOnly = function(allItems, itemsToCount) {
  //define a new empty object
  const results = {};
  //loop over allItems
  for (const item of allItems) {
    // increment our count in results if the item is found in the itemsToCount object
    if (itemsToCount[item]) {
      if (results[item]) {
        //Increment the count of each item into results as we encounter each string item in the array
        results[item] += 1;

      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];


const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });


module.exports = countOnly;