//
// Excercise #1
// pag. 59
//
//  Write a function min that takes two arguments and returns their minimum.
//

'use strict';

/**
 * Get the minimum value among those passed as arguments
 * @params {list} accept unlimited arguments in a list format - eg: 1,2,3,4,5
 */
function getMinimum() {
  // use the special `arguments` value to get infinite arguments for this function,
  // just like the built-in Math.min.
  var _args = Array.prototype.slice.call(arguments, 0);
  var _lastNumber;
  var _i;

  // emulate the Math.min behavior when there are not arguments
  if ( !_args.length > 0 ) return Infinity;

  do {
    var _currentNumber = _args.pop();
    if ( !_lastNumber || _currentNumber < _lastNumber ) _lastNumber = _currentNumber;
  } while( _args.length > 0 );

  return _lastNumber;
}

console.log('');
console.log('Excercise #1');
console.log('');


console.log(getMinimum(1,2,-20,3,4,55,5,6,8,9));
