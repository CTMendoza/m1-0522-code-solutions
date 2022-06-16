/* exported includes */
// define new function includes
// declare two parameters array and value
// loop through array to find out if value is in it
//  check if any of the array values equal to value
//    if true return true
//     else false return false

function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  } return false;
}
