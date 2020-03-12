/*
  Title:
    Failed Filter - Bug Fixing #3

  Description:
     Oh no, Timmy's filter doesn't seem to be working?
     Your task is to fix the FilterNumber function to remove all the numbers from the string.

  Kata Link:
    https://www.codewars.com/kata/failed-filter-bug-fixing-number-3

  Discuss Link:
    https://www.codewars.com/kata/failed-filter-bug-fixing-number-3/discuss

  Solutions Link:
    https://www.codewars.com/kata/failed-filter-bug-fixing-number-3/solutions
*/

// Long Solution
const filterNumbers = string => string.replace(/\d/g, '')

// Function Export
module.exports = filterNumbers
