/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  var newString = '';
  var firstCharacter = string[firstIndex];
  var secondCharacter = string[secondIndex];
  for (var i = 0; i < string.length; i++) {
    if (string.indexOf(string[i], i) === firstIndex) {
      newString += secondCharacter;
    } else if (string.indexOf(string[i], i) === secondIndex) {
      newString += firstCharacter;
    } else if (string.indexOf(string[i]) !== firstCharacter || string.indexOf(string[i]) !== secondCharacter) {
      newString += string[i];
    }
  }
  return newString;
}
