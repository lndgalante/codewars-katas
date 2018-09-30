/*
  Title:
    Failed Sort - Bug Fixing #4

  Description:
    Oh no, Timmy's Sort doesn't seem to be working?
    Your task is to fix the sortArray function to sort all numbers in ascending order

  Kata Link:
    https://www.codewars.com/kata/failed-sort-bug-fixing-number-4

  Discuss Link:
    https://www.codewars.com/kata/failed-sort-bug-fixing-number-4/discuss

  Solutions Link:
    https://www.codewars.com/kata/failed-sort-bug-fixing-number-4/solutions
*/

// Long Solution
/*
const sortArray = value =>
  value
    .split('')
    .sort((a, b) => a - b)
    .join('')
*/

// Short Solution
const sortArray = value => [...value].sort((a, b) => a - b).join('')

// Function Export
module.exports = sortArray
