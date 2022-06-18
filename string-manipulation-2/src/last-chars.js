/* exported lastChars */
function lastChars(length, string) {
  var newString = '';
  for (var i = string.length - length; i <= string.length - 1; i++) {
    newString += (string.charAt(i));
  }
  return newString;
}
