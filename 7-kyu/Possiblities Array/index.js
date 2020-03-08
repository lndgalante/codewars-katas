/*
  Title:
    Possiblities Array

  Description:
    A non-empty array a of length n is called an array of all possiblities if it contains all numbers between [0, a.length-1].
    Write a method named isAllPossibilities that accepts an integer array and returns true
    If the array is an array of all possiblities, else false.

  Examples:
    a=[1,2,0,3]
    a.length-1=3
    a includes [0,3] ,hence the function should return true

  Kata Link:
    https://www.codewars.com/kata/possiblities-array

  Discuss Link:
    https://www.codewars.com/kata/possiblities-array/discuss

  Solutions Link:
    https://www.codewars.com/kata/possiblities-array/solutions
*/

// Long Solution
/*
function isAllPossibilities(x) {
  if (!x.length) return false

  const allPossibilities = Array.from({ length: x.length }, (_, index) => index)
  const sortedNumbers = [...x].sort((a, b) => a - b)

  return sortedNumbers.every((number, index) => allPossibilities.includes(number, index))
}
*/

// Short Solution
const isAllPossibilities = x => (x.length > 0 ? x.every((_, index) => x.includes(index)) : false)

// Function Export
module.exports = isAllPossibilities
