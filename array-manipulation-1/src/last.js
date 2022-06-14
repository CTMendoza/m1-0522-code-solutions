/* exported last */
// declare a new function named last
//  declare a single parameter named array
//   assign the expression array length minus one to a new variable
//     assign array @ index array.length variable to a new variable
//      return the variable

function last(array) {
  var lastIndex = array.length - 1;
  var lastElement = array[lastIndex];
  return lastElement;
}
