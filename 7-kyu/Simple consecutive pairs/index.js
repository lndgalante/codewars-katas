/*
  Title:
    Simple consecutive pairs

  Description:
    In this Kata your task will be to return the count of pairs that have consecutive numbers as follows: pairs([1,2,5,8,-4,-3,7,6,5]) = 3

    The pairs are selected as follows [(1,2),(5,8),(-4,-3),(7,6),5]
      - The first pair is (1,2) and the numbers in the pair are consecutive; Count = 1
      - The second pair is (5,8) and are not consecutive
      - The third pair is (-4,-3), consecutive. Count = 2
      - The fourth pair is (7,6), also consecutive. Count = 3.
      - The last digit has no pair, so we ignore.

  Kata Link:
    https://www.codewars.com/kata/simple-consecutive-pairs

  Discuss Link:
    https://www.codewars.com/kata/simple-consecutive-pairs/discuss

  Solutions Link:
    https://www.codewars.com/kata/simple-consecutive-pairs/solutions
*/

// Long Solution
/*
const pairs = arr =>
  arr
    .map((number, index) => (index % 2 === 0 ? [number, arr[index + 1]] : null))
    .filter(Boolean)
    .reduce((total, [firstNumber, secondNumber]) => {
      if (firstNumber + 1 === secondNumber || firstNumber === secondNumber + 1) return total + 1
      return total
    }, 0)
*/

// Ramda Solution
/*
const R = require('ramda')

const pairs = R.pipe(
  R.splitEvery(2),
  R.filter(
    R.pipe(
      R.apply(R.subtract),
      Math.abs,
      R.equals(1)
    )
  ),
  R.length
)
*/

// Lodash Solution
/*
const _ = require('lodash')

const pairs = arr =>
  _(arr)
    .chunk(2)
    .filter(([x, y]) => Math.abs(x - y) === 1)
    .size()
*/

// Short Solution
const pairs = array =>
  array.reduce((total, number, index) => {
    if (index % 2 !== 0 || index === array.length) return total
    const nextNumber = array[index + 1]

    return total + (Math.abs(number - nextNumber) === 1)
  }, 0)

// Function Export
module.exports = pairs
