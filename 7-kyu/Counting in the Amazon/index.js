/*
  Title:
    Counting in the Amazon

  Description:
    The Arara are an isolated tribe found in the Amazon who count in pairs. For example one to eight is as follows:

    1 = anane
    2 = adak
    3 = adak anane
    4 = adak adak
    5 = adak adak anane
    6 = adak adak adak
    7 = adak adak adak anane
    8 = adak adak adak adak

    Take a given number and return the Arara's equivalent.

  Examples:
    countArara(3) 'adak anane'
    countArara(8) 'adak adak adak adak'

  Kata Link:
    https://www.codewars.com/kata/counting-in-the-amazon

  Discuss Link:
    https://www.codewars.com/kata/counting-in-the-amazon/discuss

  Solutions Link:
    https://www.codewars.com/kata/counting-in-the-amazon/solutions
*/

// Long Solution
/*
 const countArara = n =>
  n % 2 === 0
    ? `${'adak '.repeat((n - 2) / 2)}adak`
    : `${'adak '.repeat(n / 2)}anane`
*/

// Short Solution
const countArara = n =>
  `${'adak '.repeat(Math.floor(n / 2))}${'anane'.repeat(n % 2)}`.trim()

// Function Export
module.exports = countArara
