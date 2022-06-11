/* exported includesSeven */
function includesSeven(array) {
  var isTrue = true;
  var isFalse = false;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      return isTrue;
    }
  }
  return isFalse;
}
