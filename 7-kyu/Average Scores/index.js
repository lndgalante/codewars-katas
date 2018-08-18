/*
  Title:
    Average Scores

  Description:
    Create a function that returns the average of an array of numbers ("scores"), rounded to the nearest whole number.
    You are not allowed to use any loops (including for, for/in, while, and do/while loops).

  Kata Link:
    https://www.codewars.com/kata/average-scores

  Discuss Link:
    https://www.codewars.com/kata/average-scores/discuss

  Solutions Link:
    https://www.codewars.com/kata/average-scores/solutions
*/

// Long Solution
const average = scores =>
  Math.round(scores.reduce((total, value) => total + value, 0) / scores.length)

// Function Export
module.exports = average
