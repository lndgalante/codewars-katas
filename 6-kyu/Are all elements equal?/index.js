/*
  Title:


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

  Kata Link:
    https://www.codewars.com/kata/are-all-elements-equal-infinity-version

  Discuss Link:
    https://www.codewars.com/kata/are-all-elements-equal-infinity-version/discuss

  Solutions Link:
    https://www.codewars.com/kata/are-all-elements-equal-infinity-version/solutions
*/

function eqAll(iterable) {
  let last

  for (let tick of iterable) {
    if (last === undefined) last = tick
    if (tick !== last) return false
  }

  return true
}

// Function Export
module.exports = eqAll
