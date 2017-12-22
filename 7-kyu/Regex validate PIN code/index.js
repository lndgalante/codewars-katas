/*
  Title:
    Regex validate PIN code

  Description:
    ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

    If the function is passed a valid PIN string, return true, else return false.

  Examples:
    validatePIN("1234") === true
    validatePIN("12345") === false
    validatePIN("a234") === false

  Notes:

  Link:
    https://www.codewars.com/kata/regex-validate-pin-code
*/

// Long Solution
const validatePIN = pin => /^(\d{4}|\d{6})$/g.test(pin)

// Regex -> https://regexr.com/3idn4

// Function Export
module.exports = validatePIN
