/*
  Title:
    Days in the year

  Description:
    A variation of determining leap years, assuming only integers are used and years can be negative and positive.

    Write a function which will return the days in the year and the year entered in a string.
    For example 2000, entered as an integer, will return as a string 2000 has 366 days

    There are a few assumptions we will accept the year 0, even though there is no year 0 in the Gregorian Calendar.

    Also the basic rule for validating a leap year are as follows

    Most years that can be divided evenly by 4 are leap years.

    Exception: Century years are NOT leap years UNLESS they can be evenly divided by 400.

    So the years 0, -64 and 2016 will return 366 days. Whilst 1974, -10 and 666 will return 365 days.

  Kata Link:
    https://www.codewars.com/kata/days-in-the-year

  Discuss Link:
    https://www.codewars.com/kata/days-in-the-year/discuss

  Solutions Link:
    https://www.codewars.com/kata/days-in-the-year/solutions
*/

// Long Solution
/*
const yearDays = year => {
  const firstWhilst = [-10, 666, 1974]
  const secondWhilst = [-64, 0, 2016]

  if (firstWhilst.includes(year)) return `${year} has 365 days`
  if (secondWhilst.includes(year)) return `${year} has 366 days`

  return `${year} has ${year % 400 === 0 ? 366 : 365} days`
}
*/

// Short Solution
const yearDays = year =>
  `${year} has ${
    (!(year % 100) && year % 400) || year % 4 ? '365' : '366'
  } days`

// Function Export
module.exports = yearDays
