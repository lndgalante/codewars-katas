/*
  Title:
    The old switcheroo 2

  Description:
    This is a follow up from my kata The old switcheroo

    Write function encode(str)

    that takes in a string str and replaces all the letters with their respective positions in the English alphabet.

  Examples:
    encode('abc') == '123'   // a is 1st in English alpabet, b is 2nd and c is 3rd
    encode('codewars') == '315452311819'
    encode('abc-#@5') == '123-#@5'

  Notes:
    String are case sensitive.
    // Bonus point if you don't use toLowerCase()

  Kata Link:
    https://www.codewars.com/kata/the-old-switcheroo-2

  Discuss Link:
    https://www.codewars.com/kata/the-old-switcheroo-2/discuss

  Solutions Link:
    https://www.codewars.com/kata/the-old-switcheroo-2/solutions
*/

// Long Solution
/*
const encode = str =>
  str
    .replace(/[a-z]/g, charLowercase => charLowercase.charCodeAt(0) - 96)
    .replace(/[A-Z]/g, charUppercase => charUppercase.charCodeAt(0) - 64)
*/

// Short Solution
const encode = string => string.replace(/[a-z]/gi, char => char.charCodeAt() - (char < 'a' ? 64 : 96))

// Function Export
module.exports = encode
