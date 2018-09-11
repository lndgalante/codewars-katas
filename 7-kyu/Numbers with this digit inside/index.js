/*
  Title:
    Numbers with this digit inside

  Description:
    You have to search all numbers from inclusive 1 to inclusive a given number x,
    that have the given digit d in it.

    The value of d will always be 0 - 9.
    The value of x will always be greater than 0.

    You have to return as an array
    the count of these numbers, their sum and their product.

  Examples:
    x = 11
    d = 1
    ->
    Numbers: 1, 10, 11
    Return: [3, 22, 110]

  Notes:
    If there are no numbers, which include the digit, return [0,0,0].

  Kata Link:
    https://www.codewars.com/kata/numbers-with-this-digit-inside

  Discuss Link:
    https://www.codewars.com/kata/numbers-with-this-digit-inside/discuss

  Solutions Link:
    https://www.codewars.com/kata/numbers-with-this-digit-inside/solutions
*/

// Long Solution
const numbersWithDigitInside = (x, d) => {
  const numbers = Array.from({ length: x }, (_, index) => String(index + 1))
    .filter(number => number.includes(d))
    .map(number => Number(number))

  const { length: count } = numbers
  const sum = numbers.reduce((total, number) => total + number, 0)
  const product = numbers.reduce((total, number) => total * number, 1)

  return count === 0 ? [0, 0, 0] : [count, sum, product]
}

// Short Solution
/*
const solution = () => {}
*/

// Function Export
module.exports = numbersWithDigitInside
