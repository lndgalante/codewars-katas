/*
  Title:
    Search for letters

  Description:
    String search

    Create a method to accept one arbitrary string as an argument, and return a string of length 26.

    The objective is to detect if letters of the alphabet (upper or lower case) are present anywhere in the string,
    and to set each of the 26 characters corresponding to each letter to either '1' if present, '0' if not.

    So if an 'a' or an 'A' appears anywhere in the argument string (any number of times),
    set the first character of the returned string to '1' otherwise to '0', if 'b' or 'B' the the second to '1', and so on for the rest of the alphabet.

    So the returned string consists only of '1's and '0's.

  Examples:
    change('a   **&  bZ') => '11000000000000000000000001'

  Kata Link:
    https://www.codewars.com/kata/search-for-letters

  Discuss Link:
    https://www.codewars.com/kata/search-for-letters/discuss

  Solutions Link:
    https://www.codewars.com/kata/search-for-letters/solutions
*/

// Long Solution
const change = string => {
  const stringInLowerCase = string.toLowerCase()

  return 'abcdefghijklmnopqrstuvwxyz'
    .split('')
    .map(char => (stringInLowerCase.includes(char) ? 1 : 0))
    .join('')
}

// Function Export
module.exports = change
