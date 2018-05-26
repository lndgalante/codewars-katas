/*
  Title:
    Count the Monkeys!

  Description:
    You take your son to the forest to see the monkeys.
    You know that there are a certain number there (n),
    but your son is too young to just appreciate the full number,
    he has to start counting them from 1.

    As a good parent, you will sit and count with him.
    Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

  Examples:
    monkeyCount(10)
     // should return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  Notes:

  Kata Link:
    https://www.codewars.com/kata/count-the-monkeys

  Discuss Link:
    https://www.codewars.com/kata/count-the-monkeys/discuss

  Solutions Link:
    https://www.codewars.com/kata/count-the-monkeys/solutions
*/

// Long Solution
// const monkeyCount = n => Array.from({ length: n }, (_, i) => i + 1)

// Short Solution
const monkeyCount = n => [...new Array(n)].map((_, i) => i + 1)

// Function Export
module.exports = monkeyCount
