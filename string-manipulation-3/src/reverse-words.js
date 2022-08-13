/* exported reverseWords */
function reverseWords(string) {
  var stringReversed = '';
  var stringSplit = string.split(' ');
  for (var i = 0; i < stringSplit.length; i++) {
    var wordSplit = stringSplit[i].split('');
    var wordReverse = wordSplit.reverse();
    var wordJoin = wordReverse.join('');
    stringReversed += wordJoin + ' ';
    var stringMod = stringReversed.trimEnd();
  }
  return stringMod;
}
