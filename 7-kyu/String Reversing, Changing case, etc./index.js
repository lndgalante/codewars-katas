/*
  Title:
    String Reversing, Changing case, etc.

  Description:
    Given 2 string parameters, show a concatenation of:

    the reverse of the 2nd string with inverted case; e.g Fish -> HSIf
    a separator in between both strings: @@@
    the 1st string reversed with inverted case and then mirrored; e.g Water -> RETAwwATER

    Keep in mind that this kata was initially designed for Shell, I'm aware it may be easier in other languages.

  Kata Link:
    https://www.codewars.com/kata/string-reversing-changing-case-etc

  Discuss Link:
    https://www.codewars.com/kata/string-reversing-changing-case-etc/discuss

  Solutions Link:
    https://www.codewars.com/kata/string-reversing-changing-case-etc/solutions
*/

// Long Solution
const switchCase = char => (char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase())

const withReverseMirror = string =>
  [...string]
    .reverse()
    .map(switchCase)
    .join('')

const withoutReverseMirror = string => [...string].map(switchCase).join('')

const reverseAndMirror = (s1, s2) => `${withReverseMirror(s2)}@@@${withReverseMirror(s1)}${withoutReverseMirror(s1)}`

// Function Export
module.exports = reverseAndMirror
