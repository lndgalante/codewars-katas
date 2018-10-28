/*
  Title:
    Small enough? - Beginner

  Description:
    You will be given an array and a limit value.
    You must check that all values in the array are below or equal to the limit value.
    If they are, return true. Else, return false.

    You can assume all values in the array are numbers.

  Kata Link:
    https://www.codewars.com/kata/small-enough-beginner

  Discuss Link:
    https://www.codewars.com/kata/small-enough-beginner/discuss

  Solutions Link:
    https://www.codewars.com/kata/small-enough-beginner/solutions
*/

// Long Solution
/*
const smallEnough = (a, limit) => a.every(value => value <= limit)
*/

// Short Solution
const smallEnough = (a, limit) => Math.max(...a) <= limit

// Function Export
module.exports = smallEnough
