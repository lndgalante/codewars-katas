/*
  Title:
    Parse integers in array

  Description:
    A colleague asked if you can help him fixing his function.
    It seems it doesn't always parse Integers correctly.

  Examples:
    parseNumbers(['10']) // should return [10]
    parseNumbers(['-1','0','1']) // should return [-1,0,1]

  Kata Link:
    https://www.codewars.com/kata/parse-integers-in-array

  Discuss Link:
    https://www.codewars.com/kata/parse-integers-in-array/discuss

  Solutions Link:
    https://www.codewars.com/kata/parse-integers-in-array/solutions
*/

// Long Solution
const parseNumbers = intStrs => intStrs.map(number => parseInt(number, 10))

// Function Export
module.exports = parseNumbers
