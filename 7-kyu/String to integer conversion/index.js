/*
  Title:
    String to integer conversion

  Description:
    JavaScript provides a built-in parseInt method.

    It can be used like this:
      - parseInt("10") returns 10
      - parseInt("10 apples") also returns 10

    We would like it to return "NaN" (as a string) for the second case because the input string is not a valid number.

    You are asked to write a myParseInt method with the following rules:
        - It should make the conversion if the given string only contains a single integer value (and eventually spaces - including tabs, line feeds... - at both ends)
        - For all other strings (including the ones representing float values), it should return NaN
        - It should assume that all numbers are not signed and written in base 10

  Kata Link:
    https://www.codewars.com/kata/string-to-integer-conversion

  Discuss Link:
    https://www.codewars.com/kata/string-to-integer-conversion/discuss

  Solutions Link:
    https://www.codewars.com/kata/string-to-integer-conversion/solutions
*/

// Long Solution
/*
const myParseInt = str => {
  if (/^(\-|\+)?([\s0-9]+|Infinity)$/.test(str)) {
    return Number(str)
  }

  return NaN
}
*/

// Short Solution
const myParseInt = string => (/^\s*\d+\s*$/.test(string) ? Number(string) : NaN)

// Function Export
module.exports = myParseInt
