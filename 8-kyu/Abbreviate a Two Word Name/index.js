/*
  Title:
    Abbreviate a Two Word Name

  Description:
    Write a function to convert a name into initials.
    This kata strictly takes two words with one space in between them.

    The output should be two capital letters with a dot seperating them.

    It should look like this:

    Sam Harris => S.H

    Patrick Feeney => P.F

  Kata Link:
    https://www.codewars.com/kata/abbreviate-a-two-word-name

  Discuss Link:
    https://www.codewars.com/kata/abbreviate-a-two-word-name/discuss

  Solutions Link:
    https://www.codewars.com/kata/abbreviate-a-two-word-name/solutions
*/

// Long Solution
const abbrevName = name =>
  name
    .split(' ')
    .map(name => name[0].toUpperCase())
    .join('.')

// Function Export
module.exports = abbrevName
