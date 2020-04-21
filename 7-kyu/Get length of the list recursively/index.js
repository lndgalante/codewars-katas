/*
  Title:
    Get length of the list recursively

  Description:
    Write funcion lenR which returns the length of a given list.
    Try no to cheat and provide recursive solution.

  Kata Link:
    https://www.codewars.com/kata/57a83e447cb1f32de80000d5

  Discuss Link:
    https://www.codewars.com/kata/57a83e447cb1f32de80000d5/discuss

  Solutions Link:
    https://www.codewars.com/kata/57a83e447cb1f32de80000d5/solutions
*/

// Long Solution
/*
const lengthR = (x, total = 0) => (x.length ? lengthR(x.slice(1), total + 1) : total)
*/

// Short Solution
const lengthR = ([head, ...tail]) => (head ? lengthR(tail) + 1 : 0)

// Function Export
module.exports = lengthR
