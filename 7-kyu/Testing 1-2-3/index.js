/*
  Title:
    Testing 1-2-3

  Description:
    Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

    Write a function which takes a list of strings and returns each line prepended by the correct number.

    The numbering starts at 1. The format is n: string. Notice the colon and space in between.

  Examples:
    number([]) // => []
    number(["a", "b", "c"]) // => ["1: a", "2: b", "3: c"]

  Kata Link:
    https://www.codewars.com/kata/testing-1-2-3

  Discuss Link:
    https://www.codewars.com/kata/testing-1-2-3/discuss

  Solutions Link:
    https://www.codewars.com/kata/testing-1-2-3/solutions
*/

// Long Solution
const number = (array) => array.map((char, index) => `${index + 1}: ${char}`)

// Function Export
module.exports = number
