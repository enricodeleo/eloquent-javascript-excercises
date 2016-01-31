//
// Excercise #2
// pag. 59
//
//  Here’s another way to de ne whether a positive whole number is even or odd:
// • Zero is even.
// • One is odd.
// • For any other number N, its evenness is the same as N - 2.
//
// Define a recursive function isEven corresponding to this description.
// The function should accept a number parameter and return a Boolean.
// Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?
//

'use strict';

/**
 * Check if a number is even
 * @params {integer} the number to test.
 * @params {boolean} turn on or off the negative issue's fix.
 */
function isEven(number, fix) {
  if ( fix ) number = number * -1;
  function evenness(_number) {
    if ( _number === 0 ) {
      return true;
    }
    else if ( _number === 1 ) {
      return false;
    }
    else {
      return evenness( _number -2 );
    }
  }
  return evenness(number);
}

console.log('');
console.log('Excercise #2');
console.log('');


// Without the fix, testing for a negative number returns a `Maximum call stack size exceeded`
// set the second paramater to true to avoid this behavior.
console.log(isEven(-1, false));
