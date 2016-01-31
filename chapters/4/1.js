//
// Excercise #1
// pag. 83
//
// example: console.log(sum(range(1, 10)));
//
// Write a range function that takes two arguments, start and end, and returns an array
// containing all the numbers from start up to (and including) end.
//
// Next, write a sum function that takes an array of numbers and returns the sum of these numbers.
// Run the previous program and see whether it does indeed return 55.
//
// As a bonus assignment, modify your range function to take an optional third argument that
// indicates the “step” value used to build up the array. If no step is given, the array elements
// go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2)
// should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that range(5, 2, -1)
// produces [5, 4, 3, 2].
//

'use strict';

/**
 * Returns an array containing within a range
 * @params {number} the starting value.
 * @params {number} the end value.
 * @params {number} (optional) step value used to build up the array
 */
function range(start, end, step) {
  var _step = step || 1;
  var _range = [];

  function condition() {
    if ( _step < 0 ) {
      return start >= end;
    }
    else {
      return start <= end;
    }
  }

  do {
    _range.push( start );
    start += _step;
  } while ( condition() );

  return _range;
}

/**
 * Returns the sum of an array of numbers
 * @params {array} an array of numbers to sum.
 */
function sum(numbers) {
  var _sum = 0;

  do {
    _sum += numbers.pop();
  } while ( numbers.length > 0 );

  return _sum;
}

console.log('');
console.log('Excercise #3');
console.log('');

console.log(sum(range(1, 10)));
