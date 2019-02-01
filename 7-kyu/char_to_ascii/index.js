/*
  Title:
    char_to_ascii

  Description:
    Take a string and return a hash with all the ascii values of the characters in the string.
    Returns nil if the string is empty.
    The key is the character, and the value is the ascii value of the character.
    Repeated characters are to be ignored and non-alphebetic characters as well.

  Kata Link:
    https://www.codewars.com/kata/char-to-ascii

  Discuss Link:
    https://www.codewars.com/kata/char-to-ascii/discuss

  Solutions Link:
    https://www.codewars.com/kata/char-to-ascii/solutions
*/

// Long Solution
/* const charToAscii = string =>
  string.length
    ? [...new Set([...string].filter(char => /[a-z]/gi.test(char)))].reduce(
        (dictionary, char) => ({ ...dictionary, [char]: char.charCodeAt(0) }),
        {}
      )
    : null
 */
// Short Solution
const charToAscii = string =>
  string.length
    ? [...new Set([...string.replace(/\W/gi, '')])].reduce(
        (dictionary, char) => ({ ...dictionary, [char]: char.charCodeAt(0) }),
        {}
      )
    : null

// Function Export
module.exports = charToAscii
