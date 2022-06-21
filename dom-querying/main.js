console.log('hello, world');

var el = document.querySelector('h1');
console.log('h1', el);

console.dir(el);

var $explanation = document.querySelector('#explanation');

console.log('$explanation', $explanation);

console.dir($explanation);

var $hint = document.querySelector('p.hint');

console.log('$hint', $hint);

console.dir($hint);

var $p = document.querySelectorAll('p');

console.log('$p', $p);

var $links = document.querySelectorAll('a.example-link');

console.log('$links', $links);
