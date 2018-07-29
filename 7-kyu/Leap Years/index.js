/*
  Title:
    Leap Years

  Description:
    In this kata you should simply determine, whether a given year is a leap year or not.

    In case you don't know the rules, here they are:
      * years divisible by 4 are leap years
      * but years divisible by 100 are no leap years
      * but years divisible by 400 are leap years

  Notes:
    Only valid years (positive integers) will be tested, so you don't have to validate them

  Kata Link:
    https://www.codewars.com/kata/leap-years

  Discuss Link:
    https://www.codewars.com/kata/leap-years/discuss

  Solutions Link:
    https://www.codewars.com/kata/leap-years/solutions
*/

// Long Solution
/* const isLeapYear = year => {
  if (year % 400 === 0) return true
  if (year % 100 === 0) return false

  return year % 4 === 0
} */

// Short Solution
const isLeapYear = year =>
  (year % 100 !== 0 && year % 4 === 0) || year % 400 === 0

// Function Export
module.exports = isLeapYear
