/*
  Title:
    Count consonants

  Description:
    Write a function consonantCount, consonant_count or ConsonantCount that takes a string of English-language text and returns the number of consonants in the string.

    Consonants are all letters used to write English excluding the vowels a, e, i, o, u.

  Kata Link:
    https://www.codewars.com/kata/count-consonants

  Discuss Link:
    https://www.codewars.com/kata/count-consonants/discuss

  Solutions Link:
    https://www.codewars.com/kata/count-consonants/solutions
*/

// Long Solution
const consonantCount = string => (string.match(/(?=[a-z])(?![aeiou])/gi) || []).length

// Function Export
module.exports = consonantCount
