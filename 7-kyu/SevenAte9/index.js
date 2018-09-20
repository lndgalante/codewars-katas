/*
  Title:
    SevenAte9

  Description:
    Write a function that removes every lone 9 that is inbetween 7s.

    sevenAte9('79712312') => '7712312'
    sevenAte9('79797') => '777'

    Input: String
    Output: String

  Kata Link:
    https://www.codewars.com/kata/sevenate9

  Discuss Link:
    https://www.codewars.com/kata/sevenate9/discuss

  Solutions Link:
    https://www.codewars.com/kata/sevenate9/solutions
*/

// Long Solution (Without Positive Lookbehind)
/*
const sevenAte9 = str => str.replace(/79(?=7)/g, '')
*/

// Alternative Solution (With Positive Lookbehind)
const sevenAte9 = str => str.replace(/(?<=7)9(?=7)/g, '')

// Function Export
module.exports = sevenAte9
