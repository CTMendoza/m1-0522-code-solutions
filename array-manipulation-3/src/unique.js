/* exported unique */
function unique(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < i; j++) {
      if (array[i] === array[j]) {
        break;
      }
    } if (i === j) {
      newArray.push(array[i]);
    }
  } return newArray;
}
