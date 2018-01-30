/* eslint no-extend-native: 0 */
/* eslint no-use-extend-native/no-use-extend-native: 0 */

/*
  Title:
    altERnaTIng cAsE <=> ALTerNAtiNG CaSe

  Description:
    Define to_alternating_case(char*) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase.

  Kata Link:
    https://www.codewars.com/kata/alternating-case-%3C-equals-%3E-alternating-case

  Discuss Link:
    https://www.codewars.com/kata/alternating-case-%3C-equals-%3E-alternating-case/discuss

  Solutions Link:
    https://www.codewars.com/kata/alternating-case-%3C-equals-%3E-alternating-case/solutions
*/

// Long Solution
/* const isUpperCase = char => char === char.toUpperCase()

String.prototype.toAlternatingCase = function() {
  return this.split('')
    .map(char => (isUpperCase(char) ? char.toLowerCase() : char.toUpperCase()))
    .join('')
} */

// Short Solution
String.prototype.toAlternatingCase = function() {
  return this.replace(
    /[a-z]/gi,
    char => (/[a-z]/.test(char) ? char.toUpperCase() : char.toLowerCase())
  )
}

// Function Export
module.exports = String.prototype.toAlternatingCase
