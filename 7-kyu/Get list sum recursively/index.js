/*
  Title:
    Get list sum recursively

  Description:
    Write function sumR which returns the sum of values in a given list.
    Try no to cheat and provide recursive solution.

  Kata Link:
    https://www.codewars.com/kata/57a84137cf1fa5f9f80000d6

  Discuss Link:
    https://www.codewars.com/kata/57a84137cf1fa5f9f80000d6/discuss

  Solutions Link:
    https://www.codewars.com/kata/57a84137cf1fa5f9f80000d6/solutions
*/

// Long Solution
/*
function sumR(array = [], index = -1, result = 0) {
  if (index === array.length - 1) return result

  const newIndex = index + 1
  const number = array[newIndex]
  const newResult = result + number

  return sumR(array, newIndex, newResult)
}
*/

// Short Solution
const sumR = ([head, ...tail]) => (head ? head + sumR(tail) : 0)

// Function Export
module.exports = sumR
