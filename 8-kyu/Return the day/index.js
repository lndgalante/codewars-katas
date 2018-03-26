/* eslint no-prototype-builtins: 0 */

/*
  Title:
    Return the day

  Description:
    Write a function called whatday() which returns the day according to the number
      1 returns 'Sunday'

      2 returns 'Monday'

      3 returns 'Tuesday'

      4 returns 'Wednesday'

      5 returns 'Thursday'

      6 returns 'Friday'

      7 returns 'Saturday'

    If it's not a number between 1-7 return "Wrong, please enter a number between 1 and 7"

  Kata Link:
    https://www.codewars.com/kata/return-the-day

  Discuss Link:
    https://www.codewars.com/kata/return-the-day/discuss

  Solutions Link:
    https://www.codewars.com/kata/return-the-day/solutions
*/

// Long Solution
const days = {
  1: 'Sunday',
  2: 'Monday',
  3: 'Tuesday',
  4: 'Wednesday',
  5: 'Thursday',
  6: 'Friday',
  7: 'Saturday',
}

const whatday = num =>
  days.hasOwnProperty(num)
    ? days[num]
    : 'Wrong, please enter a number between 1 and 7'

// Function Export
module.exports = whatday
