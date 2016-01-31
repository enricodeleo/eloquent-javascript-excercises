//
// Excercise #3
// pag. 41
//
// Write a program that creates a string that represents an 8×8 grid, using newline characters
// to separate lines. At each position of the grid there is either a space or a “#” character.
// The characters should form a chess board.
//
// Passing this string to console.log should show something like this:
//
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//

'use strict';

var _size = 8;
var i = 1;
var _string = [];

/**
 * Return a single row of the chess
 * @param {integer} the current row's index.
 * @param {integer} the row's size.
 */
function makeRow(i, size) {
  var chars = [' ', '#'];
  if ( i % 2 === 0 ) chars.reverse();
  var numbers = Array(size).fill(0).map(function(val, index){
    return ( index % 2 === 0 ) ? chars[0] : chars[1];
  });
  return numbers.join('') + '\n';
}

console.log('');
console.log('Excercise #3');
console.log('');

do {
  _string.push( makeRow(i, _size) );
  i++;
} while ( i <= _size );

console.log(_string.join(''));
