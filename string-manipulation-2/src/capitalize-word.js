/* exported capitalizeWord */
// define function capitalizeword
// declare one parameter word
// assign an empty string to three new variables
// assign the length of the paramter word to a new variable
// check if the word parameter is strictly equal to the string 'JAVASCRIPT'
function capitalizeWord(word) {
  var newString = '';
  var wordLength = word.length;
  var capitalizeFirst = '';
  var lowerCaseRest = '';
  if (word.toUpperCase() === 'JAVASCRIPT') {
    newString = 'JavaScript';
    return newString;
  } else {
    for (var i = 0; i <= word.length - 1; i++) {
      if (word.charAt(i) === word.charAt(0)) {
        capitalizeFirst += word.charAt(i).toUpperCase();
      } else {
        lowerCaseRest += word.substring(1, wordLength);
        newString += capitalizeFirst + lowerCaseRest.toLowerCase();
        return newString;
      }
    }
  }
}
