/*
  Title:
    Find min and max

  Description:
    Implement a function that returns the minimal and the maximal value of a list (in this order).

  Kata Link:
    https://www.codewars.com/kata/57a1ae8c7cb1f31e4e000130

  Discuss Link:
    https://www.codewars.com/kata/57a1ae8c7cb1f31e4e000130/discuss

  Solutions Link:
    https://www.codewars.com/kata/57a1ae8c7cb1f31e4e000130/solutions
*/

// Long Solution
const getMinMax = (array) => [Math.min(...array), Math.max(...array)]

// Function Export
module.exports = getMinMax
