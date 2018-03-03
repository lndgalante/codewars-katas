/*
  Title:

  Description:
    Given a year, return the century it is in.

    The first century spans from the year 1 up to and including the year 100,
    the second - from the year 101 up to and including the year 200, etc.

  Examples:
    centuryFromYear(1705) // returns 18
    centuryFromYear(1900) // returns 19
    centuryFromYear(1601) // returns 17
    centuryFromYear(2000) // returns 20

  Notes:
    For C, C++ and JS, cmath (i.e. math.h) is disallowed in this Kata, in particular the ceil function; otherwise, what is the fun of this Kata? ;)

  Kata Link:
    https://www.codewars.com/kata/century-from-year

  Discuss Link:
    https://www.codewars.com/kata/century-from-year/discuss

  Solutions Link:
    https://www.codewars.com/kata/century-from-year/solutions
*/

// Long Solution
/*
const century = year => {
  const result = String(year / 100).split('.')
  return result.length === 2 ? Number(result[0]) + 1 : Number(result[0])
}
*/

// Short Solution
const century = year =>
  year % 100 === 0 ? parseInt(year / 100, 0) : parseInt(year / 100, 0) + 1

// Function Export
module.exports = century
