/*
  Title:
    Complete The Pattern #2

  Description:
  Task:
    You have to write a function pattern which returns the following Pattern (See Pattern & Examples) upto n number of rows.

  Note:
    Returning the pattern is not the same as Printing the pattern.

  Rules/Note:
    If n < 1 then it should return "" i.e. empty string.
    There are no whitespaces in the pattern.

  Pattern:
    (n)(n-1)(n-2)...4321
    (n)(n-1)(n-2)...432
    (n)(n-1)(n-2)...43
    (n)(n-1)(n-2)...4
    ...............
    ..............
    (n)(n-1)(n-2)
    (n)(n-1)
    (n)

  Examples:
  pattern(4):
    4321
    432
    43
    4

  pattern(11):
    1110987654321
    111098765432
    11109876543
    1110987654
    111098765
    11109876
    1110987
    111098
    11109
    1110
    11

  Kata Link:
    https://www.codewars.com/kata/complete-the-pattern-number-2

  Discuss Link:
    https://www.codewars.com/kata/complete-the-pattern-number-2/discuss

  Solutions Link:
    https://www.codewars.com/kata/complete-the-pattern-number-2/solutions
*/

// Long Solution
const pattern = n =>
  Array.from({ length: n }, (_, index) => {
    let str = ''
    for (let i = n; i > index; i--) str += i
    return str
  }).join('\n')

// Function Export
module.exports = pattern
