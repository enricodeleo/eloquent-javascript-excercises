// Excercise #1
// pag. 41

'use strict';

var _lines = 7;

function makeLine(len) {
  return Array(++len).join('#');
}

console.log('');
console.log('Excercise #1');
console.log('');

for ( var i = 1 ; i <= _lines; i++ ) {
  console.log(makeLine(i));
}