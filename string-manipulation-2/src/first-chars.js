/* exported firstChars */
function firstChars(length, string) {
  var newString = '';
  for (var i = 0; i <= length - 1; i++) {
    newString += (string.charAt(i));
  } return newString;
}
