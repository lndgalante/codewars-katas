/*
  Title:
    Vampire Numbers

  Description:
    Our loose definition of Vampire Numbers can be described as follows:

    6 * 21 = 126
    # 6 and 21 would be valid 'fangs' for a vampire number as the
    # digits 6, 1, and 2 are present in both the product and multiplicands

    10 * 11 = 110
    # 110 is not a vampire number since there are three 1's in the
    # multiplicands, but only two 1's in the product
    Create a function that can receive two 'fangs' and determine if the product of the two is a valid vampire number.

  Kata Link:
    https://www.codewars.com/kata/vampire-numbers-1

  Discuss Link:
    https://www.codewars.com/kata/vampire-numbers-1/discuss

  Solutions Link:
    https://www.codewars.com/kata/vampire-numbers-1/solutions
*/

// Long Solution
const sortString = string =>
  String(string)
    .split('')
    .sort()
    .join('')

const vampireTest = (a, b) => sortString(a * b) === sortString(`${a}${b}`)

// Function Export
module.exports = vampireTest
