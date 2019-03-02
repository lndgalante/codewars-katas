/*
  Title:
    Nothing special

  Description:
    The notorious Captain Schneider has given you a very straight forward mission.
    Any data that comes through the system make sure that only non-special characters see the light of day.

    Create a function that given a string, retains only the letters A-Z (upper and lowercase), 0-9 digits, and whitespace characters.
    Also, returns "Not a string!" if the entry type is not a string.

  Kata Link:
    https://www.codewars.com/kata/nothing-special

  Discuss Link:
    https://www.codewars.com/kata/nothing-special/discuss

  Solutions Link:
    https://www.codewars.com/kata/nothing-special/solutions
*/

// Long Solution
const nothingSpecial = str => (typeof str === 'string' ? str.replace(/[^0-9a-z\s]/gi, '') : 'Not a string!')

// Function Export
module.exports = nothingSpecial
