/*
  Title:
    Sum of Odd Cubed Numbers

  Description:
    Find the sum of the odd numbers within an array, after cubing the initial integers.
    This function will return undefined (NULL in PHP) if any of the values aren't numbers.

  Notes:
    There are ONLY integers in the JAVA and C# versions of this Kata.

  Kata Link:
    https://www.codewars.com/kata/sum-of-odd-cubed-numbers

  Discuss Link:
    https://www.codewars.com/kata/sum-of-odd-cubed-numbers/discuss

  Solutions Link:
    https://www.codewars.com/kata/sum-of-odd-cubed-numbers/solutions
*/

// Long Solution
const cubeOdd = arr => {
  const areNumbers = arr.every(element => typeof element === 'number')
  if (!areNumbers) return undefined

  return arr
    .map(number => number ** 3)
    .filter(number => number % 2 !== 0)
    .reduce((total, value) => total + value, 0)
}

// Function Export
module.exports = cubeOdd
