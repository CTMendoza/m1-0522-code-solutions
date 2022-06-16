/* exported capitalizeWords */
function capitalizeWords(string) {
  var splitWords = string.split(' ');
  for (var i = 0; i < splitWords.length; i++) {
    splitWords[i] = splitWords[i].charAt(0).toUpperCase() + splitWords[i].substr(1).toLowerCase();
    var newString = splitWords.join(' ');
  }
  return newString;
}
