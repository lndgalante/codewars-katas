/*
  Title:
    Get ascii value of character

  Description:
    Write a function getASCII which inputs a character and returns the corresponding ascii value for that character.

  Examples:
    getASCII('A') => 65

  Notes:
    For ASCII table, you can refer to http://www.asciitable.com/

  Kata Link:
    https://www.codewars.com/kata/get-ascii-value-of-character

  Discuss Link:
    https://www.codewars.com/kata/get-ascii-value-of-character/discuss

  Solutions Link:
    https://www.codewars.com/kata/get-ascii-value-of-character/solutions
*/

// Long Solution
const getASCII = char => char.charCodeAt()

// Function Export
module.exports = getASCII
