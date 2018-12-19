/*
  Title:
    How many twos?

  Description:
    Write a function that returns the number of '2's in the factorization of a number.

    For example:
      twoCount(24)
        should return 3, since the factorization of 24 is 2^3 x 3

      twoCount(17280)
        should return 7, since the factorization of 17280 is 2^7 x 5 x 3^3

    The number passed to two_count (twoCount) will always be a positive integer greater than or equal to 1.

  Kata Link:
    https://www.codewars.com/kata/how-many-twos

  Discuss Link:
    https://www.codewars.com/kata/how-many-twos/discuss

  Solutions Link:
    https://www.codewars.com/kata/how-many-twos/solutions
*/

// Long Solution
/*
const getAllFactorsFor = number => {
  const factors = []

  for (let i = 2; i <= number; i++) {
    while (number % i === 0) {
      factors.push(i)
      number /= i
    }
  }

  return factors
}

const twoCount = n => {
  const factors = getAllFactorsFor(n)
  const totalTwoFactors = factors.reduce((total, factor) => (factor === 2 ? total + 1 : total), 0)

  return totalTwoFactors
}
*/

// Short Solution - https://regexr.com/458ub
const twoCount = n => n.toString(2).match(/0*$/)[0].length

// Function Export
module.exports = twoCount
