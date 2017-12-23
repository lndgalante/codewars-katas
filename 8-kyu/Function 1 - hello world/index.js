/*
  Title:
    Function 1 - hello world

  Description:
    Make a simple function called greet that returns the most-famous "hello world!".

    Style Points
    Sure, this is about as easy as it gets. But how clever can you be to create
    the most creative hello world you can think of? What is a "hello world"
    solution you would want to show your friends?

  Kata Link:
    https://www.codewars.com/kata/function-1-hello-world

  Discuss Link:
    https://www.codewars.com/kata/function-1-hello-world/discuss

  Solutions Link:
    https://www.codewars.com/kata/function-1-hello-world/solutions
*/

// Short Solution
const greet = () =>
  [
    '01101000',
    '01100101',
    '01101100',
    '01101100',
    '01101111',
    '00100000',
    '01110111',
    '01101111',
    '01110010',
    '01101100',
    '01100100',
    '00100001',
  ]
    .map(byte => String.fromCharCode(parseInt(byte, 2)))
    .join('')

// Function Export
module.exports = greet
