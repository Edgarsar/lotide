// function that return a subset of a given array, removing unwanted elements
const without = function(source, itemsToRemove) {
  // filter the source array
  // if the item does not present in the itemsToRemove array then return -1
  return source.filter(item =>
    itemsToRemove.indexOf(item) < 0);

};


module.exports = without;

