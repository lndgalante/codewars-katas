/*
  Title:
    Can we divide it?

  Description:
    Your task is to create functionisDivideBy (or is_divide_by) to check if an integer number is divisible by each out of two arguments.

  Examples:
    (-12, 2, -6)  ->  true
    (-12, 2, -5)  ->  false

    (45, 1, 6)    ->  false
    (45, 5, 15)   ->  true

    (4, 1, 4)     ->  true
    (15, -5, 3)   ->  true

  Kata Link:
    https://www.codewars.com/kata/can-we-divide-it

  Discuss Link:
    https://www.codewars.com/kata/can-we-divide-it/discuss

  Solutions Link:
    https://www.codewars.com/kata/can-we-divide-it/solutions
*/

// Long Solution
const isDivideBy = (number, ...otherNumbers) =>
  otherNumbers.every(num => number % num === 0)

// Function Export
module.exports = isDivideBy
