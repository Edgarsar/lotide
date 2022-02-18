// Takes in a collection of items and returns a specific subset of those items.
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


module.exports = countOnly;