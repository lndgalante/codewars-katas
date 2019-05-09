/*
  Title:
    Array Array Array

  Description:
    You are given an initial 2-value array (x). You will use this to calculate a score.

    If both values in (x) are numbers, the score is the sum of the two.
    If only one is a number, the score is that number. If neither is a number, return 'Void!'.

    Once you have your score, you must return an array of arrays.
    Each sub array will be the same as (x) and the number of sub arrays should be equal to the score.

  Examples:
      if (x) == ['a', 3]  you should return [['a', 3], ['a', 3], ['a', 3]].

  Kata Link:
    https://www.codewars.com/kata/array-array-array

  Discuss Link:
    https://www.codewars.com/kata/array-array-array/discuss

  Solutions Link:
    https://www.codewars.com/kata/array-array-array/solutions
*/

// Long Solution
/*
const isNumber = value => typeof value === 'number'
const isString = value => typeof value === 'string'

const explode = x => {
  let score = 'Void!'
  const [firstElement, secondElement] = x

  if (isNumber(firstElement) && isNumber(secondElement)) {
    score = firstElement + secondElement
  } else if (isNumber(firstElement)) {
    score = firstElement
  } else if (isNumber(secondElement)) {
    score = secondElement
  }

  return isString(score) ? score : Array.from({ length: score }, () => x)
}
*/

// Improved Long Solution
/*
const isNumber = value => typeof value === 'number'

const explode = x => {
  const [firstElement, secondElement] = x

  if (isNumber(firstElement) && isNumber(secondElement)) return new Array(firstElement + secondElement).fill(x)
  else if (isNumber(firstElement)) return new Array(firstElement).fill(x)
  else if (isNumber(secondElement)) return new Array(secondElement).fill(x)

  return 'Void!'
}
*/

// Short Solution
const explode = x => {
  const score = x.filter(Number).reduce((total, number) => total + number, 0)
  return score ? new Array(score).fill(x) : 'Void!'
}

// Function Export
module.exports = explode
