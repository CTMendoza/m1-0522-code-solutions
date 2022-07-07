var bookList = [
  {
    isbn: '9780385323307',
    title: 'Where The Red Fern Grow',
    author: 'Wilson Rawls'
  },
  {
    isbn: '9780747532743',
    title: 'Harry Potter And The Philosopher"s Stone',
    author: 'J.K Rowling'
  },
  {
    isbn: '9788466649179',
    title: 'Ready Player One',
    author: 'Ernest Cline'
  }
];

console.log('bookList: ', bookList);
console.log('typeOf bookList: ', typeof bookList);
console.log('JSON.stringify(bookList): ', JSON.stringify(bookList));

var json = '{"id": 101010, "name": "Chris Mendoza"}';

console.log('json: ', json, 'typeof: ', typeof json);

var jsonParse = JSON.parse(json);

console.log('jsonParse: ', jsonParse, 'typof jsonParse: ', typeof jsonParse);
