/*
  Title:
    Are arrow functions odd?

  Description:
    Time to test your basic knowledge in functions!
    Return the odds from a list

  Examples:
    odds([1,2,3,4,5]) #=> [1,3,5]

  Kata Link:
    https://www.codewars.com/kata/are-arrow-functions-odd

  Discuss Link:
    https://www.codewars.com/kata/are-arrow-functions-odd/discuss

  Solutions Link:
    https://www.codewars.com/kata/are-arrow-functions-odd/solutions
*/

// Long Solution
const odds = values => values.filter(value => value % 2)

// Function Export
module.exports = odds
