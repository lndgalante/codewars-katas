/*
  Title:
    Double Char

  Description:
    Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

  Examples:
    doubleChar("String") => "SSttrriinngg"

    doubleChar("Hello World") => "HHeelllloo  WWoorrlldd"

    doubleChar("1234!_ ") => "11223344!!__  "

  Kata Link:
    https://www.codewars.com/kata/double-char

  Discuss Link:
    https://www.codewars.com/kata/double-char/discuss

  Solutions Link:
    https://www.codewars.com/kata/double-char/solutions
*/

// Long Solution
function doubleChar(str) {
  return str
    .split('')
    .map(char => `${char}${char}`)
    .join('')
}

// Function Export
module.exports = doubleChar
