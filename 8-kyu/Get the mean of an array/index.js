/*
  Title:
    Get the mean of an array

  Description:
    It's the academic year's end, fateful moment of your school report. The averages must be calculated.
    All the students come to you and entreat you to calculate their average for them.
    Easy ! You just need to write a script.

    Return the average of the given array rounded down to its nearest integer.

    The array will never be empty.

  Kata Link:
    https://www.codewars.com/kata/get-the-mean-of-an-array

  Discuss Link:
    https://www.codewars.com/kata/get-the-mean-of-an-array/discuss

  Solutions Link:
    https://www.codewars.com/kata/get-the-mean-of-an-array/solutions
*/

// Long Solution
/*
const getAverage = marks =>
  Math.floor(marks.reduce((total, value) => total + value, 0) / marks.length)
*/

// Short Solution
const getAverage = marks =>
  ~~(marks.reduce((total, value) => total + value, 0) / marks.length)

// The double bitwase operator (~~) acts like Math.floor()

// Function Export
module.exports = getAverage
