/*
  Title:
    Say hello!

  Description:
    Write a function to greet a person.
    Function will take name as input and greet the person by saying hello.
    Return null/nil if input is empty string or null/nil.

  Examples:
    greet("Niks") === "hello Niks!";
    greet("") === null; // Return null if input is empty string
    greet(null) === null; // Return null if input is null

  Kata Link:
    https://www.codewars.com/kata/say-hello

  Discuss Link:
    https://www.codewars.com/kata/say-hello/discuss

  Solutions Link:
    https://www.codewars.com/kata/say-hello/solutions
*/

// Long Solution
const greet = name => (name ? `hello ${name}!` : null)

// Function Export
module.exports = greet
