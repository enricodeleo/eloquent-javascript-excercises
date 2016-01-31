// Excercise #2
// pag. 41

'use strict';

var _lines = 100;

function fizzBuzz(number) {
  var _number = parseInt(number);
  var _fizz   = ( _number % 3 === 0 ) ? 'Fizz' : '';
  var _buzz   = ( _number % 5 === 0 ) ? 'Buzz' : '';

  return _fizz + _buzz || _number;
}

console.log('');
console.log('Excercise #2');
console.log('');

for ( var i = 1 ; i <= _lines; i++ ) {
  console.log(fizzBuzz(i));
}
