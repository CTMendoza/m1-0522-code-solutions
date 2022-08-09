/* exported isAnagram */
function isAnagram(firstString, secondString) {
  var newFirstString;
  var newSecondString;
  var firstStringSplit = firstString.split('').sort().join('');
  var secondStringSplit = secondString.split('').sort().join('');
  newFirstString = firstStringSplit.replaceAll(' ', '');
  newSecondString = secondStringSplit.replaceAll(' ', '');
  return (newFirstString === newSecondString);
}
