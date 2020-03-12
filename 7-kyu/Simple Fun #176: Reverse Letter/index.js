/*
  Title:
    Simple Fun #176: Reverse Letter

  Description:
    Given a string str, reverse it omitting all non-alphabetic characters.

  Examples:
    For str = "krishan", the output should be "nahsirk".

    For str = "ultr53o?n", the output should be "nortlu".

  Kata Link:
    https://www.codewars.com/kata/simple-fun-number-176-reverse-letter

  Discuss Link:
    https://www.codewars.com/kata/simple-fun-number-176-reverse-letter/discuss

  Solutions Link:
    https://www.codewars.com/kata/simple-fun-number-176-reverse-letter/solutions
*/

// Long Solution
/*
const reverseLetter = str =>
  [...str]
    .filter(char => /[a-z]/gi.test(char))
    .reverse()
    .join('')
*/

// Short Solution
const reverseLetter = string =>
  string
    .match(/[a-z]/gi)
    .reverse()
    .join('')

// Function Export
module.exports = reverseLetter
