/*
  Title:
    get character from ASCII Value

  Description:
    Get character from ASCII Value

    Write a function getChar/GetChar which takes a number and returns the corresponding ASCII char for that value.

  Examples:
    getChar(65) # => 'A'

  Notes:
    For ASCII table, you can refer to http://www.asciitable.com

  Kata Link:
    https://www.codewars.com/kata/get-character-from-ascii-value

  Discuss Link:
    https://www.codewars.com/kata/get-character-from-ascii-value/discuss

  Solutions Link:
    https://www.codewars.com/kata/get-character-from-ascii-value/solutions
*/

// Long Solution
const getChar = c => String.fromCharCode(c)

// Function Export
module.exports = getChar
