/*
  Title:
    Check three and two

  Description:
    Given an array with exactly 5 strings "a", "b" or "c" (chars in Java, characters in Fortran),
    check if the array contains three and two of the same values.

  Examples:
    ["a", "a", "a", "b", "b"] ==> true  // 3x "a" and 2x "b"
    ["a", "b", "c", "b", "c"] ==> false // 1x "a", 2x "b" and 2x "c"
    ["a", "a", "a", "a", "a"] ==> false // 5x "a"

  Kata Link:
    https://www.codewars.com/kata/check-three-and-two

  Discuss Link:
    https://www.codewars.com/kata/check-three-and-two/discuss

  Solutions Link:
    https://www.codewars.com/kata/check-three-and-two/solutions
*/

// Long Solution
const totalLetters = (array, string) =>
  array.filter(element => element === string).length

const checkThreeAndTwo = array => {
  const totalA = totalLetters(array, 'a')
  const totalB = totalLetters(array, 'b')
  const totalC = totalLetters(array, 'c')

  if (totalA === 3 && (totalB === 2 || totalC === 2)) return true
  if (totalB === 3 && (totalA === 2 || totalC === 2)) return true
  if (totalC === 3 && (totalA === 2 || totalB === 2)) return true

  return false
}

// Lodash Solution
/*
const _ = require('lodash')

const checkThreeAndTwo = array =>
  _(array)
    .countBy()
    .values()
    .countBy()
    .isEqual({ 2: 1, 3: 1 })
*/

// Ramda Solution
/*
const R = require('ramda')

const checkThreeAndTwo = R.pipe(
  R.countBy(R.identity),
  R.values,
  R.countBy(R.identity),
  R.equals({ 2: 1, 3: 1 })
)
*/

// Function Export
module.exports = checkThreeAndTwo
