//
// Excercise #3
// pag. 85
//
// Write a function arrayToList that builds up a data structure like the previous one when
// given [1, 2, 3] as argument, and write a listToArray function that produces an array from a list.
//
// Also write the helper functions prepend, which takes an element and a list and creates a new list
// that adds the element to the front of the input list, and nth, which takes a list and a number
// and returns the element at the given position in the list, or undefined when there is no such element.
//
// If you haven’t already, also write a recursive version of nth.
//

'use strict';

/**
 * Convert an array to a list
 * @params {array} the array to convert.
 */
function arrayToList(array) {
  var _list = {};

  for (var i = array.length - 1; i >= 0; i--) {
    _list[i] = array[i];
  };

  return _list;
}

/**
 * Convert a list to an array
 * @params {array} the list convert.
 */
function listToArray(list) {
  var _array = [];

  for (var i = list.length - 1; i >= 0; i--) {
    _array.push(list[i]);
  };

  return _array;
}


console.log('');
console.log('Excercise #2');
console.log('');

console.log(listToArray({ 0: 0, 1: 1, 2: 2 }));
