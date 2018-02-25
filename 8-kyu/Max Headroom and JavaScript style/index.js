/*
  Title:
    Max Headroom and JavaScript style

  Description:
    Shouldn't the two functions getMax1 and getMax2 be equivalent and return the same value?
    Can you spot a problem and fix it? Can you learn something about JavaScript style in this kata?

  Kata Link:
    https://www.codewars.com/kata/max-headroom-and-javascript-style

  Discuss Link:
    https://www.codewars.com/kata/max-headroom-and-javascript-style/discuss

  Solutions Link:
    https://www.codewars.com/kata/max-headroom-and-javascript-style/solutions
*/

// Long Solution
const getMax1 = () => ({ name: 'Max Headroom' })
const getMax2 = () => ({ name: 'Max Headroom' })

// Function Export
module.exports = { getMax1, getMax2 }
