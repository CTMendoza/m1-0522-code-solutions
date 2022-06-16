/* exported takeRight */
function takeRight(array, count) {
  var newArray = [];
  for (var i = Math.max(array.length - count, 0); i < array.length; i++) {
    newArray.push(array[i]);
  } return newArray;
}
