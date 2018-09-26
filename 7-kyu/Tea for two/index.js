/*
  Title:
    Tea for two

  Description:
    Given a string or number write a function tea42 that takes as input a string
    or number and returns a string where every '2' charcter or digit has been replaced with a t.

  Examples:
    tea42('coffee') //should return 'coffee'
    tea42('tea') //should return 'tea'
    tea42('2ea') //should return 'tea'
    tea42(9022) //should return '90tt'
    tea42(5676765) //should return '5676765'
    tea42('2u2u') //should return 'tutu'

  Kata Link:
    https://www.codewars.com/kata/tea-for-two

  Discuss Link:
    https://www.codewars.com/kata/tea-for-two/discuss

  Solutions Link:
    https://www.codewars.com/kata/tea-for-two/solutions
*/

// Long Solution
const tea42 = input => String(input).replace(/2/g, 't')

// Function Export
module.exports = tea42
