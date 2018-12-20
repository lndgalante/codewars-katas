/*
  Title:
    Complete The Pattern #5 - Even Ladder

  Description:
    You have to write a function pattern which creates the following pattern upto n number of rows.
      - If the Argument is 0 or a Negative Integer then it should return "" i.e. empty string.
      - If any odd number is passed as argument then the pattern should last upto the largest even number which is smaller than the passed odd number.
      - If the argument is 1 then also it should return "".

  Examples:
    pattern(8):
      22
      4444
      666666
      88888888

    pattern(5):
      22
      4444

  Notes:
    Note: There are no spaces in the pattern
    Hint: Use \n in string to jump to next line

  Kata Link:
    https://www.codewars.com/kata/complete-the-pattern-number-5-even-ladder

  Discuss Link:
    https://www.codewars.com/kata/complete-the-pattern-number-5-even-ladder/discuss

  Solutions Link:
    https://www.codewars.com/kata/complete-the-pattern-number-5-even-ladder/solutions
*/

// Long Solution
/*
const pattern = n => {
  if (!n || n === 1) return ''

  let number = 2
  const output = []
  const limit = n % 2 !== 0 ? n - 1 : n

  while (number <= limit) {
    output.push(String(number).repeat(number))
    number += 2
  }

  return output.join('\n')
}
*/

// Short Solution
const pattern = n =>
  n <= 0
    ? ''
    : Array.from({ length: Math.floor(n / 2) })
        .map((_, index) => (2 + 2 * index).toString().repeat(2 + 2 * index))
        .join('\n')

// Function Export
module.exports = pattern
