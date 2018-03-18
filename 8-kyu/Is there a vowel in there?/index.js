/*
  Title:
    Is there a vowel in there?

  Description:
    Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

    If they are, change the array value to a string of that vowel.

    Return the resulting array.

  Kata Link:
    https://www.codewars.com/kata/is-there-a-vowel-in-there

  Discuss Link:
    https://www.codewars.com/kata/is-there-a-vowel-in-there/discuss

  Solutions Link:
    https://www.codewars.com/kata/is-there-a-vowel-in-there/solutions
*/

// Long Solution
const isVow = a =>
  a.map(
    charCode =>
      /[aeiou]/.test(String.fromCharCode(charCode))
        ? String.fromCharCode(charCode)
        : charCode
  )

// Function Export
module.exports = isVow
