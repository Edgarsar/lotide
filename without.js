// Takes in a source array and an itemsToRemove arrays and returns only the items from the source array that are not in the itemsToRemove array.
const without = function(source, itemsToRemove) {
  // filter the source array
  // if the item does not present in the itemsToRemove array then return -1
  return source.filter(item =>
    itemsToRemove.indexOf(item) < 0);

};


module.exports = without;

