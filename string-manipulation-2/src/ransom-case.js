/* exported ransomCase */
// define new function ransomCase
//  declare one parameter string
//  assign empty string to new variable
//  loop through string
//   check if the remainder of the index is equal to 0
//   if true, lowercase string character
//   else, uppercase string character
function ransomCase(string) {
  var newString = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      newString += string.charAt(i).toLowerCase();
    } else {
      newString += string.charAt(i).toUpperCase();
    }
  } return newString;
}
