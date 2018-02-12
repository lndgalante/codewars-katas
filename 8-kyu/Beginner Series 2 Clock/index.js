/*
  Title:
    Beginner Series #2 Clock

  Description:
    Clock shows 'h' hours, 'm' minutes and 's' seconds after midnight.

    Your task is to make 'Past' function which returns time converted to miliseconds.

  Examples:
    past(0, 1, 1) == 61000

  Kata Link:
    https://www.codewars.com/kata/beginner-series-number-2-clock

  Discuss Link:
    https://www.codewars.com/kata/beginner-series-number-2-clock/discuss

  Solutions Link:
    https://www.codewars.com/kata/beginner-series-number-2-clock/solutions
*/

// Long Solution
/* function past(h, m, s) {
  const hourInMs = h * 3600000
  const minutesInMs = m * 60000
  const secondsInMS = s * 1000

  return hourInMs + minutesInMs + secondsInMS
} */

// Short Solution
const past = (h, m, s) => (h * 3600 + m * 60 + s) * 1000

// Function Export
module.exports = past
