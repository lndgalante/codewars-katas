/*
  Title:
    Twice as old

  Description:
    Your function takes two arguments:
      1. current father's age (years)
      2. current age of his son (years)

    Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).

  Kata Link:
    https://www.codewars.com/kata/twice-as-old

  Discuss Link:
    https://www.codewars.com/kata/twice-as-old/discuss

  Solutions Link:
    https://www.codewars.com/kata/twice-as-old/solutions
*/

// Long Solution
const twiceAsOld = (dadYearsOld, sonYearsOld) =>
  Math.abs(dadYearsOld - sonYearsOld * 2)

// Function Export
module.exports = twiceAsOld
