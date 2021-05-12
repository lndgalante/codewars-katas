/*
  Title:
    Word to binary

  Description:
    Write a function that takes a string and returns an array containing binary numbers equivalent to the ASCII codes of the characters of the string. The binary strings should be eight digits long.
    Example: 'man' should return [ '01101101', '01100001', '01101110' ]


  Examples:

  Notes:

  Kata Link:
    https://www.codewars.com/kata/59859f435f5d18ede7000050

  Discuss Link:
    https://www.codewars.com/kata/59859f435f5d18ede7000050/discuss

  Solutions Link:
    https://www.codewars.com/kata/59859f435f5d18ede7000050/solutions
*/

// Long Solution
/*
function wordToBin(string) {
  return [...string].map((character) => `0${character.charCodeAt(0).toString(2)}`)
}
*/

// Short Solution
const wordToBin = (string) => [...string].map((character) => character.charCodeAt(0).toString(2).padStart(8, 0))

// Function Export
module.exports = wordToBin
