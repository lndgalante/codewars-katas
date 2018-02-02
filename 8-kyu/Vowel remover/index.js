/*
  Title:
    Vowel remover

  Description:
    Create a function called shortcut to remove all the lowercase vowels in a given string.

  Examples:
    shortcut("codewars")
      // --> cdwrs
    shortcut("goodbye")
      // --> gdby

  Notes:
    Don't worry about uppercase vowels.

  Kata Link:
    https://www.codewars.com/kata/vowel-remover

  Discuss Link:
    https://www.codewars.com/kata/vowel-remover/discuss

  Solutions Link:
    https://www.codewars.com/kata/vowel-remover/solutions
*/

// Long Solution
const shortcut = string => string.replace(/[aeiou]/g, '')

// Function Export
module.exports = shortcut
