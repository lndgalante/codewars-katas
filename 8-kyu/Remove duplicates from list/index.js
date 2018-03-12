/*
  Title:
    Remove duplicates from list

  Description:
    Write function distinct that removes duplicate from list of numbers.

    The order of the sequence needs to stay the same.

  Kata Link:
    https://www.codewars.com/kata/remove-duplicates-from-list

  Discuss Link:
    https://www.codewars.com/kata/remove-duplicates-from-list/discuss

  Solutions Link:
    https://www.codewars.com/kata/remove-duplicates-from-list/solutions
*/

// Long Solution
const distinct = a => [...new Set(a)]

// Function Export
module.exports = distinct
