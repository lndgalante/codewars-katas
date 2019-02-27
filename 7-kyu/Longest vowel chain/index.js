/*
  Title:
    Longest vowel chain

  Description:
    The vowel substrings in the word codewarriors are o,e,a,io.
    The longest of these has a length of 2.
    Given a lowercase string that has alphabetic characters only and no spaces, return the length of the longest vowel substring.

  Kata Link:
    https://www.codewars.com/kata/longest-vowel-chain

  Discuss Link:
    https://www.codewars.com/kata/longest-vowel-chain/discuss

  Solutions Link:
    https://www.codewars.com/kata/longest-vowel-chain/solutions
*/

// Long Solution
const solve = s => Math.max(...(s.match(/[aeiou]+/g) || []).map(match => match.length))

// Function Export
module.exports = solve
