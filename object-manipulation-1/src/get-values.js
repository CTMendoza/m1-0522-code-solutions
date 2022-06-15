/* exported getValues */

function getValues(object) {
  var getKeyValues = [];
  for (const x in object) {
    getKeyValues.push(object[x]);
  }
  return getKeyValues;
}
