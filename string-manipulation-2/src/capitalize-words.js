/* exported capitalizeWords */
// define function capitalizWords
//  declare parameter string
//  assign the split method of string value to a new variable splitWords
//  loop trhough the parameter string

function capitalizeWords(string) {
  var splitWords = string.split(' ');
  for (var i = 0; i < splitWords.length; i++) {
    splitWords[i] = splitWords[i].charAt(0).toUpperCase() + splitWords[i].substr(1).toLowerCase();
    var newString = splitWords.join(' ');
  }
  return newString;
}
