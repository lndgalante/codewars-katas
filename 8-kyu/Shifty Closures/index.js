/*
  Title:
    Shifty Closures

  Description:
    Functional closures can get overly attached. Set them straight!

    Why doesn't greet_abe() actually greet Abe?

  Kata Link:
    https://www.codewars.com/kata/shifty-closures

  Discuss Link:
    https://www.codewars.com/kata/shifty-closures/discuss

  Solutions Link:
    https://www.codewars.com/kata/shifty-closures/solutions
*/

// Long Solution
let name

const greetAbe = () => {
  name = 'Abe'
  return `Hello, ${name}!`
}

const greetBen = () => {
  name = 'Ben'
  return `Hello, ${name}!`
}

// Function Export
module.exports = { greetAbe, greetBen }
