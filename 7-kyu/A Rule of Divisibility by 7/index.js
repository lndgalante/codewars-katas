/*
  Title:
    A Rule of Divisibility by 7

  Description:
    A number m of the form 10x + y is divisible by 7 if and only if x − 2y is divisible by 7.
    In other words, subtract twice the last digit from the number formed by the remaining digits.
    Continue to do this until a number known to be divisible or not by 7 is obtained;
    you can stop when this number has at most 2 digits because you are supposed to know if a number of at most 2 digits is divisible by 7 or not.

    The original number is divisible by 7 if and only if the last number obtained using this procedure is divisible by 7.
    1 - m = 371 -> 37 − (2×1) -> 37 − 2 = 35 ; thus, since 35 is divisible by 7, 371 is divisible by 7.
    The number of steps to get the result is 1.

    2 - m = 1603 -> 160 - (2 x 3) -> 154 -> 15 - 8 = 7 and 7 is divisible by 7.

    3 - m = 372 -> 37 − (2×2) -> 37 − 4 = 33 ; thus, since 33 is not divisible by 7, 372 is not divisible by 7.
    The number of steps to get the result is 1.

    4 - m = 477557101->47755708->4775554->477547->47740->4774->469->28 and 28 is divisible by 7, so is 477557101.
    The number of steps is 7.

    Your task is to return to the function seven(m) (m integer >= 0) an array (or a pair, depending on the language) of numbers,
    the first being the last number m with at most 2 digits obtained by your function (this last m will be divisible or not by 7),
    the second one being the number of steps to get the result.

  Examples:
    seven(371) should return [35, 1]
    seven(1603) should return [7, 2]
    seven(477557101) should return [28, 7]

  Kata Link:
    https://www.codewars.com/kata/a-rule-of-divisibility-by-7

  Discuss Link:
    https://www.codewars.com/kata/a-rule-of-divisibility-by-7/discuss

  Solutions Link:
    https://www.codewars.com/kata/a-rule-of-divisibility-by-7/solutions
*/

// Long Solution
/*
const seven = m => {
  let times = 0
  let result = 0
  let number = String(m)

  while (number.length > 2) {
    times++

    const firstNumber = Number(number.slice(-1))
    const remaining = Number(number.slice(0, number.length - 1))

    result = remaining - 2 * firstNumber
    number = String(result)
  }

  return [result, times]
}
*/

// Short Solution
const seven = m => {
  let times = 0
  let number = m

  while (String(number).length > 2) {
    times++
    number = Math.floor(number / 10) - (number % 10) * 2
  }

  return [number, times]
}

// Function Export
module.exports = seven
