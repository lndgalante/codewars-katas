/*
  Title:
    What's a Perfect Power anyway?

  Description:
    A perfect power is a classification of positive integers:

    In mathematics, a perfect power is a positive integer that can be expressed as an integer power of another positive integer. More formally, n is a perfect power if there exist natural numbers m > 1, and k > 1 such that mk = n.
    Your task is to check wheter a given integer is a perfect power. If it is a perfect power, return a pair m and k with mk = n as a proof. Otherwise return Nothing, Nil, null, NULL, None or your language's equivalent.

  Notes:
   For a perfect power, there might be several pairs.
   For example 81 = 3^4 = 9^2, so (3,4) and (9,2) are valid solutions.
   However, the tests take care of this, so if a number is a perfect power, return any pair that proves it.

  Kata Link:
    https://www.codewars.com/kata/whats-a-perfect-power-anyway

  Discuss Link:
    https://www.codewars.com/kata/whats-a-perfect-power-anyway/discuss

  Solutions Link:
    https://www.codewars.com/kata/whats-a-perfect-power-anyway/solutions
*/

// Brute force
/*
const isPP = n => {
  for (let k = 2; k < 1000; k++) {
    const m = Math.pow(n, 1 / k)
    if (Number.isInteger(m) && Math.pow(m, k) === n) return [m, k]
  }

  return null
}
*/

// Long Solution
const isPP = n => {
  let current = 2
  let power = 2
  const max = Math.floor(n / 2)

  while (current <= max) {
    power = 2

    while (Math.pow(current, power) <= n) {
      if (n === Math.pow(current, power)) {
        return [current, power]
      }

      power++
    }

    current++
  }

  return null
}

// Function Export
module.exports = isPP
