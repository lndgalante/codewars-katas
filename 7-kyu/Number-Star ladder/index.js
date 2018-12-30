/*
  Title:
    Number-Star ladder

  Description:
    Using n as a parameter in the function pattern, where n should be a natural number,
    complete the codes to get the pattern (take the help of examples):

  Examples:
    pattern(3) should return `"1\n12\n1*3", e.g. the following:
      1
      1*2
      1**3

    pattern(10): should return the following:
      1
      1*2
      1**3
      1***4
      1****5
      1*****6
      1******7
      1*******8
      1********9
      1*********10

    Note that there shouldn't be any trailing newlines.

  Notes:
    There is no newline in the end (after the pattern ends)

  Kata Link:
    https://www.codewars.com/kata/number-star-ladder

  Discuss Link:
    https://www.codewars.com/kata/number-star-ladder/discuss

  Solutions Link:
    https://www.codewars.com/kata/number-star-ladder/solutions
*/

// Long Solution
const pattern = n =>
  Array.from({ length: n }, (_, index) => `1${'*'.repeat(index)}${index === 0 ? '' : index + 1}`).join('\n')

// Function Export
module.exports = pattern
