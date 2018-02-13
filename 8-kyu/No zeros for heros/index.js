/*
  Title:
    No zeros for heros

  Description:
    Numbers ending with zeros are boring.

    They might be fun in your world, but not here.

    Get rid of them. Only the ending ones.

    1450 -> 145
    960000 -> 96
    1050 -> 105
    -1050 -> -105
    Zero alone is fine, don't worry about it. Poor guy anyway

  Kata Link:
    https://www.codewars.com/kata/no-zeros-for-heros

  Discuss Link:
    https://www.codewars.com/kata/no-zeros-for-heros/discuss

  Solutions Link:
    https://www.codewars.com/kata/no-zeros-for-heros/solutions
*/

// Long Solution
/*
function noBoringZeros(n) {
  if (n === 0) return 0

  const number = String(n)
  let result = number

  for (let i = 0; i < number.length; i++) {
    if (result.endsWith('0')) {
      result = result.substring(0, result.length - 1)
    }
  }

  return Number(result)
}
*/

// Short Solution
const noBoringZeros = n => Number(`${n}`.replace(/0+$/, ''))

// Regexr https://regexr.com/3knq8

// Function Export
module.exports = noBoringZeros
