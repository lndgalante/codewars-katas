/*
  Title:
    Power

  Description:
    The goal is to create a function 'numberToPower(number, power)' that "raises" the number up to power (ie multiplies number by itself power times).

  Examples:
    numberToPower(3,2)
      // -> 9 ( = 3 * 3 )
    numberToPower(2,3)
      // -> 8 ( = 2 * 2 * 2 )
    numberToPower(10,6)
      // -> 1000000

  Notes:
    Math.pow and some others Math functions are disabled on final tests.

  Kata Link:
    https://www.codewars.com/kata/power

  Discuss Link:
    https://www.codewars.com/kata/power/discuss

  Solutions Link:
    https://www.codewars.com/kata/power/solutions
*/

// Long Solution
/*
const numberToPower = (number, power) => {
  let result = 1

  for (let i = 1; i <= power; i++) result *= number

  return result
}
*/

// Short Solution
/*
const numberToPower = (number, power) =>
  Array.from(Array(power)).reduce((total, _, index) => total * number, 1)
*/

// Alternative Solution
const numberToPower = (number, power) =>
  power > 0 ? number * numberToPower(number, power - 1) : 1

// Function Export
module.exports = numberToPower
