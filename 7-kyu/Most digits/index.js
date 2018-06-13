/*
  Title:
    Most digits

  Description:
    Find the number with the most digits.

    If two numbers in the argument array have the same number of digits, return the first one in the array.

  Kata Link:
    https://www.codewars.com/kata/most-digits

  Discuss Link:
    https://www.codewars.com/kata/most-digits/discuss

  Solutions Link:
    https://www.codewars.com/kata/most-digits/solutions
*/

// Long Solution
/*
const numberLength = number => `${number}`.length

const findLongest = array => {
  const numberLengths = array.map(number => numberLength(number))
  const biggestLength = Math.max(...numberLengths)

  const firstBiggest = array.find(num => numberLength(num) === biggestLength)

  return firstBiggest
}
*/

// Short Solution
const compareLength = (a, b) => (`${b}`.length > `${a}`.length ? b : a)

const findLongest = array => array.reduce(compareLength)

// Function Export
module.exports = findLongest
