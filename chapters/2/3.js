// Excercise #3
// pag. 41

'use strict';

var _size = 8;

function makeRow(i, size) {
  var chars = [' ', '#'];
  if ( i % 2 === 0 ) chars.reverse();
  var numbers = Array(size).fill(0).map(function(val, index){
    return ( index % 2 === 0 ) ? chars[0] : chars[1];
  });
  return numbers.join('');
}

console.log('');
console.log('Excercise #3');
console.log('');

for ( var i = 1 ; i <= _size; i++ ) {
  console.log(makeRow(i, _size));
}