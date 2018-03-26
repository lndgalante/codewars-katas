/*
  Title:
    Do you speak "English"?

  Description:
    Given a string of arbitrary length with any ascii characters.
    Write a function to determine whether the string contains the whole word "English".

    The order of characters is important -- a string "abcEnglishdef" is correct but "abcnEglishsef" is not correct.

    Upper or lower case letter does not matter -- "eNglisH" is also correct.

    Return value as boolean values, true for the string to contains "English", false for it does not.

  Kata Link:
    https://www.codewars.com/kata/do-you-speak-english

  Discuss Link:
    https://www.codewars.com/kata/do-you-speak-english/discuss

  Solutions Link:
    https://www.codewars.com/kata/do-you-speak-english/solutions
*/

// Long Solution
const spEng = sentence => /english/gi.test(sentence)

// Function Export
module.exports = spEng
