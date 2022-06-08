var one = 1;

var two = 2;

var three = 3;

var maximumValue = Math.max(one, two, three);

console.log('The value of maximumValue is ', maximumValue);

var faveHeroes = ['spiderman', 'batman', 'black panther', 'iron man'];

var randomNumber = Math.random();

randomNumber = randomNumber * faveHeroes.length;

var randomIndex = Math.floor(randomNumber);

console.log('Value of randomIndex is ', randomIndex);

var randomHero = faveHeroes[randomIndex];

console.log('Todays random hero is... ', randomHero);

var library = [
  {
    title: 'One Piece',
    author: 'Eichiro Oda'
  },

  {
    title: 'HunterxHunter',
    author: 'Yoshihiro Togashi'
  },
  {
    title: 'Rurouni Kenshin',
    author: 'Nobuhiro Watsuki'
  }
];

var lastBook = library.pop();

console.log('This is the lastBook ', lastBook);

var firstBook = library.shift();

console.log('This is the firstBook ', firstBook);

var js = {
  title: 'Javascript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};

var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);

library.unshift(css);

library.splice(1, 1);

console.log('Value of library is ', library);

var fullName = 'Christopher Mendoza';

var firstAndLastName = fullName.split(' ');

console.log('firstAndLastName', firstAndLastName);

var firstName = firstAndLastName[0];

var sayMyName = firstName.toUpperCase();

console.log('sayMyName: ', sayMyName);
