/* 
  Description:
    Create a function eqAll that determines if all elements of a list are equal.
    list can be any iterable, and may be infinite. Return value is a Boolean.

  Examples:
    eqAll("aaa") => true
    eqAll("abc") => false
    eqAll("")    => true

    eqAll([0,0,0]) => true
    eqAll([0,1,2]) => false
    eqAll([])      => true

  Notes:
    For the function result to be true, the iterable must be finite; false, however, can result from an element finitely far from the left end. There will be no tests with infinite series of equal elements.
    Elements will be primitive values; equality should be strict (===).

  Link:
    https://www.codewars.com/kata/are-all-elements-equal-infinity-version/javascript
*/

function eqAll(iterable) {
  let last

  for (let tick of iterable) {
    if (last === undefined) last = tick
    if (tick !== last) return false
  }

  return true
}

// Test to pass
const set1 = new Set(['7', '6', '8', '9', '3', '2'])
const set2 = new Set([1, 1, 1])
const set4 = new Set()

console.log(eqAll('aaa'))
// => It should return true
console.log(eqAll('abc'))
// => It should return false
console.log(eqAll(''))
// => It should return true
console.log(eqAll([0, 0, 0]))
// => It should return true
console.log(eqAll([0, 1, 2]))
// => It should return false
console.log(eqAll([]))
// => It should return true
console.log(eqAll({ a: 1, b: 2, c: 3 }))
// => It should return false
console.log(eqAll({ a: 1, b: 1, c: 1 }))
// => It should return true
console.log(eqAll({}))
// => It should return false
console.log(eqAll(set1))
// => It should return true
console.log(eqAll(set2))
// => It should return true
console.log(eqAll(set3))
// => It should return false
