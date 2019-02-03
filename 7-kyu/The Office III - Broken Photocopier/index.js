/*
  Title:
    The Office III - Broken Photocopier

  Description:
    The bloody photocopier is broken... Just as you were sneaking around the office to print off your favourite binary code!
    Instead of copying the original, it reverses it: '1' becomes '0' and vice versa.
    Given a string of binary, return the version the photocopier gives you as a string.

  Kata Link:
    https://www.codewars.com/kata/the-office-iii-broken-photocopier

  Discuss Link:
    https://www.codewars.com/kata/the-office-iii-broken-photocopier/discuss

  Solutions Link:
    https://www.codewars.com/kata/the-office-iii-broken-photocopier/solutions
*/

// Long Solution
/*
const broken = x => [...x].map(bit => (bit === '0' ? '1' : '0')).join('')
*/

// Short Solution
const broken = x => x.replace(/./g, x => x ^ 1)

// Function Export
module.exports = broken
