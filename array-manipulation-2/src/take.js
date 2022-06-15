/* exported take */
// define new function take
//  declare two parameters named array and count
//   assign an empty array to a new variable
//    loop through the parameter array
//     for each loop pass add the element from array to the new array
//      return new array

function take(array, count) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (i <= count - 1) {
      newArray.push(array[i]);
    }
  } return newArray;
}
