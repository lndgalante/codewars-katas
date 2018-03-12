/*
  Title:
    Count Odd Numbers below n

  Description:
    Given a number n, return the number of positive odd numbers below n, EASY!

  Examples:
    oddCount(7)
    // => 3, i.e [1, 3, 5]
    oddCount(15)
    // => 7, i.e [1, 3, 5, 7, 9, 11, 13]

  Notes:
    Expect large Inputs!

  Kata Link:
    https://www.codewars.com/kata/count-odd-numbers-below-n

  Discuss Link:
    https://www.codewars.com/kata/count-odd-numbers-below-n/discuss

  Solutions Link:
    https://www.codewars.com/kata/count-odd-numbers-below-n/solutions
*/

// Long Solution
/*
const oddCount = n =>
  n % 2 === 0 ? Math.floor((n - 1) / 2) : Math.floor((n - 2) / 2)
*/

// Short Solution
const oddCount = n => Math.floor(n / 2)

// Function Export
module.exports = oddCount
