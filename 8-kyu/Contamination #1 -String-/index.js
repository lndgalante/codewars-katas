/*
  Title:
    Contamination #1 -String-

  Description:
    This text is now fully mutated to this character.

    If the text or the character are empty, return an empty string.
    There will never be a case when both are empty as nothing is going on!!

  Examples:
    text before = "abc"
    character   = "z"
    text after  = "zzz"

  Notes:
    The character is a string of length 1 or an empty string.

  Kata Link:
    https://www.codewars.com/kata/contamination-number-1-string

  Discuss Link:
    https://www.codewars.com/kata/contamination-number-1-string/discuss

  Solutions Link:
    https://www.codewars.com/kata/contamination-number-1-string/solutions
*/

// Long Solution
const contamination = (text, char) => char.repeat(text.length)

// Function Export
module.exports = contamination
