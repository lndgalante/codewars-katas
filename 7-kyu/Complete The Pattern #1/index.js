/*
  Title:
    Complete The Pattern #1

  Description:
    You have to write a function pattern which returns the following Pattern(See Pattern & Examples) upto n number of rows.

  Examples:
    pattern(5):
      1
      22
      333
      4444
      55555

    pattern(11):
      1
      22
      333
      4444
      55555
      666666
      7777777
      88888888
      999999999
      10101010101010101010
      1111111111111111111111

  Notes:
    * Returning the pattern is not the same as Printing the pattern.
    * If n < 1 then it should return "" i.e. empty string.
    * There are no whitespaces in the pattern.
    *  Use \n in string to jump to next line

  Kata Link:
    https://www.codewars.com/kata/complete-the-pattern-number-1

  Discuss Link:
    https://www.codewars.com/kata/complete-the-pattern-number-1/discuss

  Solutions Link:
    https://www.codewars.com/kata/complete-the-pattern-number-1/solutions
*/

// Long Solution
/*
function pattern(n) {
  let output = ''

  for (let i = 1; i <= n; i++) {
    if (i === n) {
      output += `${String(i).repeat(i)}`
      continue
    }

    output += `${String(i).repeat(i)}\n`
  }

  return output
}
*/

// Short Solution
const pattern = n =>
  Array.from({ length: n }, (_, index) =>
    String(index + 1).repeat(index + 1)
  ).join('\n')

// Function Export
module.exports = pattern
