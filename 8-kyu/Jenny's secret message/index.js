/*
  Title:
    Jenny's secret message

  Description:
    Jenny has written a function that returns a greeting for a user.
    However, she's in love with Johnny, and would like to greet him slightly different.
    She added a special case to her function, but she made a mistake.

    Can you help her?

  Kata Link:
    https://www.codewars.com/kata/jennys-secret-message

  Discuss Link:
    https://www.codewars.com/kata/jennys-secret-message/discuss

  Solutions Link:
    https://www.codewars.com/kata/jennys-secret-message/solutions
*/

// Long Solution
/*
function greet(name) {
  if (name === 'Johnny') return 'Hello, my love!'
  return 'Hello, ' + name + '!'
}
*/

// Short Solution
const greet = name =>
  name === 'Johnny' ? 'Hello, my love!' : `Hello, ${name}!`

// Function Export
module.exports = greet
