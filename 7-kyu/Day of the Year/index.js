/*
  Title:
    Day of the Year

  Description:
    Work out what number day of the year it is.
    toDayOfYear([1, 1, 2000]) => 1

    The argument passed into the function is an array with the format [M, D, YYYY], e.g. [1, 2, 2000] for February 1st, 2000 or [22, 12, 1999] for December 22nd, 1999.
    Don't forget to check for whether it's a leap year! Three criteria must be taken into account to identify leap years:

    The year can be evenly divided by 4;
    If the year can be evenly divided by 100, it is NOT a leap year, unless;
    The year is also evenly divisible by 400. Then it is a leap year.



  Examples:

  Notes:

  Kata Link:
    https://www.codewars.com/kata/5a1ebe0d46d843454100004c

  Discuss Link:
    https://www.codewars.com/kata/5a1ebe0d46d843454100004c/discuss

  Solutions Link:
    https://www.codewars.com/kata/5a1ebe0d46d843454100004c/solutions
*/

/* Long Solution
const moment = require('moment')

function toDayOfYear(arr) {
  const [DD, MM, YYYY] = arr
  const dayOfYear = moment(`${MM}-${DD}-${YYYY}`, 'MM-DD-YYYY').dayOfYear()

  return dayOfYear
}
*/

// Short Solution
const moment = require('moment')

const toDayOfYear = ([DD, MM, YYYY]) => moment(`${MM}-${DD}-${YYYY}`, 'MM-DD-YYYY').dayOfYear()

// Function Export
module.exports = toDayOfYear
