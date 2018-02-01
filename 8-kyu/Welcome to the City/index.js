/*
  Title:
    Welcome to the City

  Description:
    Create a method sayHello that takes as input a name, city, and state to welcome a person.
    Note that name will be an array consisting of one or more values that should be joined together
    with one space betweeen each, and the length of the name array in test cases will vary.

  Examples:
    sayHello(['John', 'Smith'], 'Phoenix', 'Arizona')
    // "Hello, John Smith! Welcome to Phoenix, Arizona!"

  Kata Link:
    https://www.codewars.com/kata/welcome-to-the-city

  Discuss Link:
    https://www.codewars.com/kata/welcome-to-the-city/discuss

  Solutions Link:
    https://www.codewars.com/kata/welcome-to-the-city/solutions
*/

// Long Solution
const sayHello = (name, city, state) =>
  `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`

// Function Export
module.exports = sayHello
