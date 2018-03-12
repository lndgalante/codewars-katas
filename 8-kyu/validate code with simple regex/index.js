/*
  Title:
    Validate code with simple regex

  Description:
    Basic regex tasks. Write a function that takes in a numeric code of any lenght. The function will check if the code begins with 1, 2, or 3 and return true if so. Return false otherwise.

    You can assume the input will always be a number.

  Kata Link:
    https://www.codewars.com/kata/validate-code-with-simple-regex

  Discuss Link:
    https://www.codewars.com/kata/validate-code-with-simple-regex/discuss

  Solutions Link:
    https://www.codewars.com/kata/validate-code-with-simple-regex/solutions
*/

// Long Solution
// const validateCode = code => /^[123]/g.test(code)

// Short Solution
const validateCode = code => /^[1-3]/g.test(code)

// Function Export
module.exports = validateCode
