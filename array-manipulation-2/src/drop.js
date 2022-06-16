/* exported drop */
// define new function drop
//  declare two parameters named array and count
//   assign an empty array to a new variable
//    loop through the parameter array
//     for each loop pass add the element from array to the new array
//      return new array

function drop(array, count) {
  var newArray = [];
  for (var i = array.length - 1; i >= count; i--) {
    if (i >= count) {
      newArray.unshift(array[i]);
    }
  } return newArray;
}
