/* exported isUpperCased */

// declare a new function isUpperCased
// check if word is strictly equal to word.toUpperCase
//   if true,  return the boolean true
//    else false, return the boolean false
function isUpperCased(word) {
  if (word === word.toUpperCase()) {
    return true;
  } else {
    return false;
  }
}
