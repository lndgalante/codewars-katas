/*
  Title:
    Elapsed Seconds

  Description:
    Complete the function so that it returns the number of seconds that have elapsed between the start and end times given.

    The start/end times are given as Date (JS/CoffeeScript), DateTime (C#), Time (Nim) and Time (Ruby) instances.
    The start time will always be before the end time.

  Kata Link:
    https://www.codewars.com/kata/elapsed-seconds

  Discuss Link:
    https://www.codewars.com/kata/elapsed-seconds/discuss

  Solutions Link:
    https://www.codewars.com/kata/elapsed-seconds/solutions
*/

// Short Solution
const elapsedSeconds = (startDate, endDate) =>
  (endDate.getTime() - startDate.getTime()) / 1000

// Function Export
module.exports = elapsedSeconds
