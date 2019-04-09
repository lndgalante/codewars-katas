/*
  Title:
    Changing letters

  Description:
    When provided with a String, capitalize all vowels

  Examples:
    Input : "Hello World!"
    Output : "HEllO WOrld!"

  Kata Link:
    https://www.codewars.com/kata/changing-letters

  Discuss Link:
    https://www.codewars.com/kata/changing-letters/discuss

  Solutions Link:
    https://www.codewars.com/kata/changing-letters/solutions
*/

// Long Solution
const swap = st => st.replace(/[aeiou]/g, vowel => vowel.toUpperCase())

// Function Export
module.exports = swap
