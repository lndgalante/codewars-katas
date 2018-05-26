/* eslint unicorn/prefer-spread: 0 */

/*
  Title:
    SequenceSum

  Description:
    A sequence or a series, in mathematics, is a string of objects, like numbers, that follow a particular pattern. The individual elements in a sequence are called terms.

    For example, some simple patterns include: 3, 6, 9, 12, 15, 18, 21, ...
    Pattern: "add 3 to the previous number to get the next number"

    0, 12, 24, 36, 48, 60, 72, ...
    Pattern: "add 12 to the previous number to get the next number"

    How about generating a more complicated pattern?
    0, 1, 3, 6, 10, 15, 21, 28, ...
    0(0),1(0+1),3(0+1+2),6(0+1+2+3)...
    Pattern: "thenth term is the sum of numbers(from 0 ton, inclusive)"

    sum_of_n (or SequenceSum.sumOfN in Java, SequenceSum.SumOfN in C#) takes an integer n and returns a List (an Array in Java/C#) of length abs(n) + 1. The List/Array contains the numbers in the arithmetic series produced by taking the sum of the consecutive integer numbers from 0 to n inclusive.

    n can also be 0 or a negative value.

  Examples:
    5 -> [0, 1, 3, 6, 10, 15]

    -5 -> [0, -1, -3, -6, -10, -15]

    7 -> [0, 1, 3, 6, 10, 15, 21, 28]

  Kata Link:
    https://www.codewars.com/kata/sequencesum

  Discuss Link:
    https://www.codewars.com/kata/sequencesum/discuss

  Solutions Link:
    https://www.codewars.com/kata/sequencesum/solutions
*/

// Long Solution
/* function sumOfN(n) {
  const isNegative = n < 0
  const result = []

  for (let i = 0; i <= Math.abs(n) + 1; i++) {
    const previousSum = result.reduce(
      (total, value, index) => (isNegative ? total - index : total + index),
      0
    )
    result.push(previousSum)
  }

  return result.slice(1)
} */

// Short Solution
const sumOfN = n => {
  const sign = n < 0 ? -1 : 1

  return Array.from({ length: Math.abs(n) }).reduce(
    (result, value, index) => [...result, result[index] + (index + 1) * sign],
    [0]
  )
}

// Function Export
module.exports = sumOfN
