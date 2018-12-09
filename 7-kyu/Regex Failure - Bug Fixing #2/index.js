/*
  Title:
    Regex Failure - Bug Fixing #2

  Description:
    Oh no, Timmy's received some hate mail recently but he knows better.
    Help Timmy fix his regex filter so he can be awesome again!

  Examples:

  Notes:

  Kata Link:
    https://www.codewars.com/kata/regex-failure-bug-fixing-number-2

  Discuss Link:
    https://www.codewars.com/kata/regex-failure-bug-fixing-number-2/discuss

  Solutions Link:
    https://www.codewars.com/kata/regex-failure-bug-fixing-number-2/solutions
*/

// Long Solution
const filterWords = phrase => phrase.replace(/(bad|mean|ugly|horrible|hideous)/gi, 'awesome')

// Function Export
module.exports = filterWords
