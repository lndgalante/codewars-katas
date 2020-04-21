/*
  Title:
    No Loops 1 - Small enough?

  Description:
    * No Loops Allowed *

    You will be given an array (a) and a limit value (limit).
    You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

    You can assume all values in the array are numbers.
    Do not use loops. Do not modify input array.

  Kata Link:
    https://www.codewars.com/kata/57cc4853fa9fc57a6a0002c2

  Discuss Link:
    https://www.codewars.com/kata/57cc4853fa9fc57a6a0002c2/discuss

  Solutions Link:
    https://www.codewars.com/kata/57cc4853fa9fc57a6a0002c2/solutions
*/

// Long Solution
/*
const smallEnough = (a, limit) => a.every((number) => number <= limit)
*/

// Short Solution
const smallEnough = (a, limit) => Math.max(...a) <= limit

// Function Export
module.exports = smallEnough
