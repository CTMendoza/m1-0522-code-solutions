/* exported flatten */
function flatten(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (var c = 0; c < array[i].length; c++) {
        newArray.push(array[i][c]);
      }
    } else newArray.push(array[i]);
  } return newArray;
}
