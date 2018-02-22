/*
  Title:
    Find n'th Digit of a Number

  Description:
    The function findDigit takes two numbers as input, num and nth.
    It outputs the nth digit of num (counting from right to left).

  Examples:
    findDigit(5673, 4)     returns 5
    findDigit(129, 2)      returns 2
    findDigit(-2825, 3)    returns 8
    findDigit(-456, 4)     returns 0
    findDigit(0, 20)       returns 0
    findDigit(65, 0)       returns -1
    findDigit(24, -8)      returns -1

  Notes:
    * If num is negative, ignore its sign and treat it as a positive value.
    * If nth is not positive, return -1.
    * Keep in mind that 42 = 00042. This means that findDigit(42, 5) would return 0.

  Kata Link:
    https://www.codewars.com/kata/find-nth-digit-of-a-number

  Discuss Link:
    https://www.codewars.com/kata/find-nth-digit-of-a-number/discuss

  Solutions Link:
    https://www.codewars.com/kata/find-nth-digit-of-a-number/solutions
*/

// Long Solution
const findDigit = (num, nth) => {
  const numString = String(Math.abs(num))

  if (nth <= 0) return -1
  if (nth > numString.length) return 0

  const arr = numString.split('').reverse()
  return Number(arr[nth - 1])
}

// Function Export
module.exports = findDigit
