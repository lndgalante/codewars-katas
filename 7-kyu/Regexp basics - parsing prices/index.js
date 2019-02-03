/* eslint no-extend-native: 0 */
/* eslint no-use-extend-native/no-use-extend-native: 0 */

/*
  Title:
    Regexp basics - parsing prices

  Description:
    Implement String#to_cents, which should parse prices expressed as $1.23 and return number of cents, or in case of bad format return nil.

  Kata Link:
    https://www.codewars.com/kata/regexp-basics-parsing-prices

  Discuss Link:
    https://www.codewars.com/kata/regexp-basics-parsing-prices/discuss

  Solutions Link:
    https://www.codewars.com/kata/regexp-basics-parsing-prices/solutions
*/

// Long Solution
/*
String.prototype.toCents = function() {
  return /^\$\d+\.\d{0,2}$/g.test(this) ? Number(this.replace(/\$|\./g, '')) : null
}
*/

// Short Solution
String.prototype.toCents = function() {
  return /^\$\d+\.\d{0,2}$/g.test(this) ? Number(this.replace(/[$.]/g, '')) : null
}

// Function Export
module.exports = String
