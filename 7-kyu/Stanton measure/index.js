/*
  Title:
    Stanton measure

  Description:
    The Stanton measure of an array is computed as follows: count the number of 1s in the array.
    Let this count be n. The Stanton measure is the number of times that n appears in the array.
    Write a function which takes an integer array and returns its Stanton measure.

  Examples:
    The Stanton measure of [1, 4, 3, 2, 1, 2, 3, 2] is 3, because 1 occurs 2 times in the array and 2 occurs 3 times.

  Kata Link:
    https://www.codewars.com/kata/stanton-measure

  Discuss Link:
    https://www.codewars.com/kata/stanton-measure/discuss

  Solutions Link:
    https://www.codewars.com/kata/stanton-measure/solutions
*/

// Long Solution
/*
const stantonMeasure = arr => {
  const stantonNumber = arr.reduce((total, number) => (number === 1 ? total + 1 : total), 0)
  const stantonRepetitions = arr.reduce((total, number) => (number === stantonNumber ? total + 1 : total), 0)

  return stantonRepetitions
}
*/

// Short Solution
const stantonMeasure = array => array.filter(number => number === array.filter(number => number === 1).length).length

// Function Export
module.exports = stantonMeasure
