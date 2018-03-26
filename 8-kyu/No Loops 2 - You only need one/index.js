/*
  Title:
    No Loops 2 - You only need one

  Description:
    No Loops Allowed

    You will be given an array (a) and a value (x).
    All you need to do is check whether the provided array contains the value, without using a loop.

    Array can contain numbers or strings.
    X can be either. Return true if the array contains the value, false if not.
    With strings you will need to account for case.

  Kata Link:
    https://www.codewars.com/kata/no-loops-2-you-only-need-one

  Discuss Link:
    https://www.codewars.com/kata/no-loops-2-you-only-need-one/discuss

  Solutions Link:
    https://www.codewars.com/kata/no-loops-2-you-only-need-one/solutions
*/

// Long Solution
const check = (a, x) => a.includes(x)

// Function Export
module.exports = check
