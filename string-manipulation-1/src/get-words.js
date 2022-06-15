/* exported getWords */
function getWords(string) {
  var newWords;
  if (string.length > 0) {
    newWords = string.split(' ');
  } else if (string.length === 0) {
    newWords = [];
  } return newWords;
}
