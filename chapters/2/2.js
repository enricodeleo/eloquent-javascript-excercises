//
// Excercise #2
// pag. 41
//
// Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions.
// For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3),
// print "Buzz" instead.
//
// When you have that working, modify your program to print "FizzBuzz", for numbers that are divisible
// by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
//

'use strict';

var _lines = 100;

/**
 * Return a number or Fizz/Buzz
 * @param {integer} the number to return.
 * @param {boolean} turn on the final version of the excercise.
 */
function fizzBuzz(number, isFinal) {
  var _number = parseInt(number);
  var _fizz   = ( _number % 3 === 0 ) ? 'Fizz' : '';
  var _buzz   = ( _number % 5 === 0 ) ? 'Buzz' : '';

  if ( isFinal ) {
    return _fizz + _buzz || _number;
  }
  else {
    return _fizz || _buzz || _number;
  }
}

console.log('');
console.log('Excercise #2');
console.log('');

for ( var i = 1 ; i <= _lines; i++ ) {
  console.log(fizzBuzz(i, true));
}
