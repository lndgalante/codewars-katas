/*
  Title:
    Name Shuffler

  Description:
    Write a function that returns a string in which firstname is swapped with last name.

  Examples:
    nameShuffler('john McClane'); => "McClane john"

  Kata Link:
    https://www.codewars.com/kata/name-shuffler

  Discuss Link:
    https://www.codewars.com/kata/name-shuffler/discuss

  Solutions Link:
    https://www.codewars.com/kata/name-shuffler/solutions
*/

// Long Solution
const nameShuffler = str =>
  str
    .split(' ')
    .reverse()
    .join(' ')

// Function Export
module.exports = nameShuffler
