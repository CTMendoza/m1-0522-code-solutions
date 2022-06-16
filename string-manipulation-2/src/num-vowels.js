/* exported numVowels */
function numVowels(string) {
  var count = 0;
  var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  for (var i = 0; i < string.length; i++) {
    if (vowels.includes(string.charAt(i))) {
      count++;
    }
  } return count;
}
