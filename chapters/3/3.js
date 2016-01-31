//
// Excercise #3
// pag. 59
//
// Write a function countBs that takes a string as its only argument and returns a number that
// indicates how many uppercase “B” characters are in the string.
//
// Next, write a function called countChar that behaves like countBs, except it takes a second argument
// that indicates the character that is to be counted (rather than counting only uppercase “B” characters).
// Rewrite countBs to make use of this new function.
//

'use strict';

/**
 * Returns how many uppercase “B” characters are in a string
 * @params {string} the string to test.
 */
function countBs(string) {
  var _counter = 0;

  for (var i = string.length - 1; i >= 0; i--) {
    if ( string.charAt(i) === 'B' ) {
      _counter++;
    }
  };

  return _counter;
}

console.log('');
console.log('Excercise #3');
console.log('');

console.log(countBs('This is the Best string I could think about. Better than nothing, uh?'));
