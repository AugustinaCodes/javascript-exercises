const removeFromArray = function (arr, item) {
  const itemIndex = arr.indexOf(item);
  arr.splice(itemIndex, 1);
  return arr;
};

console.log(removeFromArray([1, 2, 3, 4], 3));

// Do not edit below this line
module.exports = removeFromArray;
