/*
  Title:
    Narcissistic Numbers

  Description:
    A Narcissistic Number is a number of length n in which the sum of its digits to the power of n is equal to the original number.
    If this seems confusing, refer to the example below.

    Ex: 153, where n = 3 (number of digits in 153)
    13 + 53 + 33 = 153

    Write a method is_narcissistic(i) (in Haskell: isNarcissistic :: Integer -> Bool) which returns whether or not i is a Narcissistic Number.

  Kata Link:
    https://www.codewars.com/kata/narcissistic-numbers

  Discuss Link:
    https://www.codewars.com/kata/narcissistic-numbers/discuss

  Solutions Link:
    https://www.codewars.com/kata/narcissistic-numbers/solutions
*/

// Long Solution
/*
const isNarcissistic = n => {
  const exponent = String(n).length
  const formula = [...String(n)]
    .map(Number)
    .reduce((total, number) => total + number ** exponent, 0)

  return formula === n
}
*/

// Short Solution
const isNarcissistic = n =>
  [...String(n)]
    .map(Number)
    .reduce(
      (total, number, _, { length: exponent }) => total + number ** exponent,
      0
    ) === n

// Function Export
module.exports = isNarcissistic
