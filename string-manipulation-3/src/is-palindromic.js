/* exported isPalindromic */
function isPalindromic(string) {
  var re = ' ';
  var lowRegStr = string.replace(re, '');
  var reverseStr = lowRegStr.split('').reverse().join('');
  return reverseStr === lowRegStr;
}
