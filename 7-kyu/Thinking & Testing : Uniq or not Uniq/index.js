/*
  Title:
    Thinking & Testing : Uniq or not Uniq

  Description:
    No Story
    No Description

    Only by Thinking and Testing
    Look at result of testcase, guess the code!

  Kata Link:
    https://www.codewars.com/kata/thinking-and-testing-uniq-or-not-uniq

  Discuss Link:
    https://www.codewars.com/kata/thinking-and-testing-uniq-or-not-uniq/discuss

  Solutions Link:
    https://www.codewars.com/kata/thinking-and-testing-uniq-or-not-uniq/solutions
*/

// Long Solution
/*
 const filterMoreThanOneRepetition = arr => arr.filter((num, index, arr) => !arr.includes(num, index + 1))

const testit = (a, b) => [...filterMoreThanOneRepetition(a), ...filterMoreThanOneRepetition(b)].sort((a, b) => a - b)
*/

// Short Solution
const testit = (a, b) => [...new Set(a), ...new Set(b)].sort((a, b) => a - b)

// Function Export
module.exports = testit
