//
// Excercise #2
// pag. 84
//
// For this exercise, write two functions, reverseArray and reverseArrayInPlace.
//
// The first, reverseArray, takes an array as argument and produces a new array that has the same
// elements in the inverse order.
//
// The second, reverseArrayInPlace, does what the reverse method does:
// it modifies the array given as argument in order to reverse its elements. Neither may use the standard
// reverse method.
//

'use strict';

/**
 * Inverse the order of elements of an array
 * @params {array} the array to inverse.
 */
function reverseArray(array) {
  var _inversedArray = [];

  console.time('reverseArray');

  for (var i = array.length - 1; i >= 0; i--) {
    _inversedArray.push(array[i]);
  };

  console.timeEnd('reverseArray');

  return _inversedArray;
}

/**
 * Inverse the order of elemnts of an array
 * @params {array} the array to inverse.
 */
function reverseArrayInPlace(array) {

  console.time('reverseArrayInPlace');

  for (var i = array.length - 1; i >= 0; i--) {
    array.push( array.splice(i, 1)[0] );
  };

  console.timeEnd('reverseArrayInPlace');

  return array;
}


console.log('');
console.log('Excercise #2');
console.log('');

console.log(reverseArrayInPlace([1,2,3,4,5,6]));
console.log('');
console.log(reverseArray([1,2,3,4,5,6]));
