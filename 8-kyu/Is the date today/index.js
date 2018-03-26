/*
  Title:
    Is the date today

  Description:
    This is a simple function that should take in a date object and return a boolean representing weather the date is today or not.

    Make sure that your function does not return a false positive by just checking just the day.

  Kata Link:
    https://www.codewars.com/kata/is-the-date-today

  Discuss Link:
    https://www.codewars.com/kata/is-the-date-today/discuss

  Solutions Link:
    https://www.codewars.com/kata/is-the-date-today/solutions
*/

// Long Solution
/*
const isToday = date => new Date().getDay() === date.getDay()
*/

// Short Solution
const isToday = date => new Date().toDateString() === date.toDateString()

// Function Export
module.exports = isToday
