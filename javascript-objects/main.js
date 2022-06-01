var student = {
  firstName: 'Chris',
  lastName: 'Mendoza',
  age: 29
};

var fullName = student.firstName + ' ' + student.lastName;

console.log('Value of fullName: ', fullName);

student.livesInIrvine = false;

student.previousOccupation = 'accountant';

console.log('Value of student.livesInIrvine: ', student.livesInIrvine);

console.log('Value of student.previousOccupation: ', student.previousOccupation);

console.log('Value of student: ', student);

var vehicle = {
  make: 'Mitsubishi',
  model: 'Outlander',
  year: 2003
};

vehicle['color'] = 'blue';

vehicle['isConvertible'] = false;

console.log('Value of vehicle[color]: ', vehicle['color']);

console.log('Value of vehicle[isConvertible]: ', vehicle['isConvertible']);

console.log('Value of vehicle: ', vehicle);

var pet = {
  name: 'Bunta',
  type: 'Dog'
};

delete pet.name;

delete pet.type;

console.log('value of pet: ', pet);
