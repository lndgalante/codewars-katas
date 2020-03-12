/*
  Title:
    Odds-Index

  Description:
    You are given an array with several "even" words, one "odd" word, and some numbers mixed in.
    Determine if any of the numbers in the array is the index of the "odd" word. If so, return true, otherwise false.

  Kata Link:
    https://www.codewars.com/kata/odds-index

  Discuss Link:
    https://www.codewars.com/kata/odds-index/discuss

  Solutions Link:
    https://www.codewars.com/kata/odds-index/solutions
*/

// Long Solution
/*
const oddBall = arr => {
  const oddIndex = arr.findIndex(element => element === 'odd')
  const indexes = arr.filter(element => typeof element === 'number')

  return indexes.includes(oddIndex)
}
*/

// Short Solution
const oddBall = array => array.includes(array.indexOf('odd'))

// Function Export
module.exports = oddBall
