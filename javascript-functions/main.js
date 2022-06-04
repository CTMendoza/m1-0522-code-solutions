function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}

var convertMinutesToSecondsResults = convertMinutesToSeconds(2);

console.log('Value of convertMinutesToSecondsResults is: ', convertMinutesToSecondsResults, ' seconds');

function greet(name) {
  var greeting = 'Yo ' + name + '! How is it going?';
  return greeting;
}

var greetResult = greet('Barry');

console.log('Value of greetResult is: ', greetResult);

function getArea(width, height) {
  var rectangleArea = width * height;
  return rectangleArea;
}

var getAreaResult = getArea(22, 55);

console.log('Value of getAreaResult is: ', getAreaResult);

function getFirstName(person) {
  var firstNameSelected = person.firstName;
  return firstNameSelected;
}

var getFirstNameResult = getFirstName({ firstName: 'John', lastName: 'Dizon' });

console.log('Value of getFirstNameResult is: ', getFirstNameResult);

function getLastElement(array) {
  var lastIndex = array.length - 1;
  var lastElementSelected = array[lastIndex];
  return lastElementSelected;
}

var getLastElementResult = getLastElement(['Larry', 3, 10, 'Perry']);

console.log('Value of getLastElementResult is: ', getLastElementResult);
