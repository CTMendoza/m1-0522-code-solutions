/* exported capitalize */
// define a new variabble named capitalize
//  declare a single parameter named word
//    assign an empty string to a new variable named capitalizeFirstChar
//    assign another empty string to a new variable named capitalizeFirstChar
//    declare variable capResult
//    uppercase the first letter in the word and assign it to the empty string capitalizeFirstChar
//    lowercase the remaining letters in the word and assign it to the empty string lower
//     assign the result of concatinating capitalizeFirstChar and lowerCaseOthers to capResult
//     return capResult

function capitalize(word) {
  var capitalizeFirstChar = '';
  var lowerCaseOthers = '';
  var capResult;
  capitalizeFirstChar += word[0].toUpperCase();
  lowerCaseOthers += word.slice(1).toLowerCase();
  capResult = capitalizeFirstChar + lowerCaseOthers;
  return capResult;
}
