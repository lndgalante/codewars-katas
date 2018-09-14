/*
  Title:
    Say "Hello World" JS Style

  Description:
    Write the definition of the function "say" such that calling this:

    say("Hello")("World")

    returns "Hello World"

  Kata Link:
    https://www.codewars.com/kata/say-hello-world-js-style

  Discuss Link:
    https://www.codewars.com/kata/say-hello-world-js-style/discuss

  Solutions Link:
    https://www.codewars.com/kata/say-hello-world-js-style/solutions
*/

// Long Solution
const say = str1 => str2 => `${str1} ${str2}`

// Function Export
module.exports = say
