/* exported sumAll */
function sumAll(numbers) {
  var sumNumbers = 0;
  for (var i = 0; i < numbers.length; i++) {
    sumNumbers += numbers[i];
  }
  return sumNumbers;
}
