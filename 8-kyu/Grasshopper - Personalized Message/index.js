/*
  Title:
    Grasshopper - Personalized Message

  Description:
    Personalized greeting
    Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

    Use conditionals to return the proper message: case | return --- | --- name equals owner | 'Hello boss' otherwise | 'Hello guest'

  Kata Link:
    https://www.codewars.com/kata/grasshopper-personalized-message

  Discuss Link:
    https://www.codewars.com/kata/grasshopper-personalized-message/discuss

  Solutions Link:
    https://www.codewars.com/kata/grasshopper-personalized-message/solutions
*/

// Long Solution
const greet = (name, owner) => (name === owner ? 'Hello boss' : 'Hello guest')

// Function Export
module.exports = greet
