/* exported tail */

// define a new function named tail
//  declare a single parameter named array
//    assign an empty array to a new variable newArray
//      loop through the parameter array
//        within the loop codeblock, push the array elements to new array
//          return newArray outside the loop
function tail(array) {
  var newArray = [];
  for (var i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
