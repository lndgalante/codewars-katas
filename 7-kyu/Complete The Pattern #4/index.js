/*
  Title:
    Complete The Pattern #4

  Description:
    You have to write a function pattern which creates the following pattern upto n number of rows.
    If the Argument is 0 or a Negative Integer then it should return "" i.e. empty string.

  Examples:
    pattern(4):
      1234
      234
      34
      4

    pattern(6):
      123456
      23456
      3456
      456
      56
      6

  Notes:
    Note: There are no blank spaces
    Hint: Use \n in string to jump to next line

  Kata Link:
    https://www.codewars.com/kata/complete-the-pattern-number-4

  Discuss Link:
    https://www.codewars.com/kata/complete-the-pattern-number-4/discuss

  Solutions Link:
    https://www.codewars.com/kata/complete-the-pattern-number-4/solutions
*/

// Long Solution
const pattern = n =>
  Array.from({ length: n }, (_, index) => index + 1)
    .map((_, index, array) => array.slice(index).join(''))
    .join('\n')

// Function Export
module.exports = pattern
