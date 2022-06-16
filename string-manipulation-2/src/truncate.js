/* exported truncate */
// define a new function called truncate
// declare two parameters named length and string
// assign an empty string

function truncate(length, string) {
  var ellipsis = '...';
  var newString = '';
  for (var i = 0; i <= length - 1; i++) {
    newString += string.charAt(i);
  }
  newString += ellipsis;
  return newString;
}
