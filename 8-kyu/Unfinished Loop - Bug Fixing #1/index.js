/* eslint unicorn/prefer-spread: 0 */

/*
  Title:
    Unfinished Loop - Bug Fixing #1

  Description:
    Oh no, Timmy's created an infinite loop!
    Help Timmy find and fix the bug in his unfinished For Loop!

  Kata Link:
    https://www.codewars.com/kata/unfinished-loop-bug-fixing-number-1

  Discuss Link:
    https://www.codewars.com/kata/unfinished-loop-bug-fixing-number-1/discuss

  Solutions Link:
    https://www.codewars.com/kata/unfinished-loop-bug-fixing-number-1/solutions
*/

// Long Solution
/*
function createArray(number) {
  const newArray = []

  for (let counter = 1; counter <= number; counter++) {
    newArray.push(counter)
  }

  return newArray
}
*/

// Short Solution
const createArray = n => Array.from({ length: n }, (_, i) => i + 1)

// Function Export
module.exports = createArray
