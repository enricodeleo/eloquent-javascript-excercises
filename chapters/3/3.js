//
// Excercise #3
// pag. 60
//
// Write a function countBs that takes a string as its only argument and returns a number that
// indicates how many uppercase “B” characters are in the string.
//
// Next, write a function called countChar that behaves like countBs, except it takes a second argument
// that indicates the character that is to be counted (rather than counting only uppercase “B” characters).
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

/**
 * Returns how many uppercase characters of a kind are in a string
 * @params {string} the string to test.
 * @params {string} the character to test.
 */
function countChar(string, character) {

  var _counter = 0;

  for (var i = string.length - 1; i >= 0; i--) {
    if ( string.charAt(i) === character ) {
      _counter++;
    }
  };

  return _counter;
}

console.log('');
console.log('Excercise #3');
console.log('');

console.log(countChar('This is the Best string I could think about. Better than nothing, uh?', 'B'));
