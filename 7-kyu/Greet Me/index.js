/*
  Title:
    Greet Me

  Description:
    Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

  Examples:
    greet("maya") # returns "Hello Maya!"
    greet("JACK") # returns "Hello Jack!"

  Kata Link:
    https://www.codewars.com/kata/greet-me/train/javascript

  Discuss Link:
    https://www.codewars.com/kata/greet-me/train/javascript/discuss

  Solutions Link:
    https://www.codewars.com/kata/greet-me/train/javascript/solutions
*/

// Long Solution
const greet = name =>
  `Hello ${name.slice(0, 1).toUpperCase()}${name.slice(1).toLowerCase()}!`

// Function Export
module.exports = greet
