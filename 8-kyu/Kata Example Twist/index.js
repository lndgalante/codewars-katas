/*
  Title:
    Kata Example Twist

  Description:
    This is an easy twist to the example kata (provided by Codewars when learning how to create your own kata).

    Add the value "codewars" to the array websites/Websites 1,000 times.

    var websites = []

  Kata Link:
    https://www.codewars.com/kata/kata-example-twist

  Discuss Link:
    https://www.codewars.com/kata/kata-example-twist/discuss

  Solutions Link:
    https://www.codewars.com/kata/kata-example-twist/solutions
*/

// Long Solution
/*
  const websites = []
  for (let i = 0; i < 1000; i++) websites.push('codewars')
*/

// Short Solution
const websites = new Array(1000).fill('codewars')

// Function Export
module.exports = websites
