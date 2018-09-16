/*
  Title:
    Reverse a Number

  Description:
    Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)

    Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.

  Examples:
    123 ->  321
    -456 -> -654
    1000 ->    1

  Kata Link:
    https://www.codewars.com/kata/reverse-a-number

  Discuss Link:
    https://www.codewars.com/kata/reverse-a-number/discuss

  Solutions Link:
    https://www.codewars.com/kata/reverse-a-number/solutions
*/

// Long Solution
/*
const reverseNumber = n => {
  const numberSplitted = String(n).split('')
  const isNegative = n < 0

  return isNegative
    ? Number(
        -numberSplitted
          .slice(1)
          .reverse()
          .join('')
      )
    : Number(numberSplitted.reverse().join(''))
}
*/

// Short Solution
const reverseNumber = n =>
  Math.sign(n) * [...String(Math.abs(n))].reverse().join('')

// Function Export
module.exports = reverseNumber
