/*
  Title:
    Is it a vowel on this position?

  Description:
    Check if it is a vowel(a, e, i, o, u,) on the n position in a string (the first argument).
    Don't forget about uppercase.

  Examples:
    checkVowel('cat', 1)  ->   true // 'a' is a vowel
    checkVowel('cat', 0)  ->   false // 'c' is not a vowel
    checkVowel('cat', 4)  ->   false // this position doesn't exist

  Notes:
    P.S. If n < 0, return false

  Kata Link:
    https://www.codewars.com/kata/is-it-a-vowel-on-this-position

  Discuss Link:
    https://www.codewars.com/kata/is-it-a-vowel-on-this-position/discuss

  Solutions Link:
    https://www.codewars.com/kata/is-it-a-vowel-on-this-position/solutions
*/

// Long Solution
/*
const checkVowel = (string, position) => position >= 0 && position < string.length && /[aeiou]/gi.test(string[position])
*/

// Short Solution
const checkVowel = (string, position) => /[aeiou]/i.test(string[position] || '')

// Function Export
module.exports = checkVowel
