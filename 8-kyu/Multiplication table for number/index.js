/*
  Title:
    Multiplication table for number

  Description:
    Your goal is to return multiplication table for number that is always an integer from 1 to 10.

    For example, a multiplication table (string) for number == 5 looks like below:

    1 * 5 = 5
    2 * 5 = 10
    3 * 5 = 15
    4 * 5 = 20
    5 * 5 = 25
    6 * 5 = 30
    7 * 5 = 35
    8 * 5 = 40
    9 * 5 = 45
    10 * 5 = 50

    P. S. You can use \n in string to jump to the next line.

  Kata Link:
    https://www.codewars.com/kata/multiplication-table-for-number

  Discuss Link:
    https://www.codewars.com/kata/multiplication-table-for-number/discuss

  Solutions Link:
    https://www.codewars.com/kata/multiplication-table-for-number/solutions
*/

// Long Solution
/*
const multiTable = number => {
  let result = ''

  for (let i = 1; i <= 10; i++) {
    if (i === 10) {
      result += `${i} * ${number} = ${i * number}`
      break
    }
    result += `${i} * ${number} = ${i * number}\n`
  }

  return result
}
*/

// Short Solution
const multiTable = number =>
  [...new Array(10)]
    .map((_, i) => `${i + 1} * ${number} = ${(i + 1) * number}`)
    .join('\n')

// Function Export
module.exports = multiTable
