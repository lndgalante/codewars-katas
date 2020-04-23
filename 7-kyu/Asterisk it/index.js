/*
  Title:
    Asterisk it

  Description:
    Task
    You are given a function that should insert an asterisk (*) between every pair of even digits in the given input, and return it as a string.
    If the input is a sequence, concat the elements first as a string.

    Input
    The input can be an integer, a string of digits or a sequence containing integers only.

    Output
    Return a string.

  Examples:
    5312708     -->  "531270*8"
    "0000"      -->  "0*0*0*0"
    [1, 4, 64]  -->  "14*6*4"Have fun!

  Kata Link:
    https://www.codewars.com/kata/5888cba35194f7f5a800008b

  Discuss Link:
    https://www.codewars.com/kata/5888cba35194f7f5a800008b/discuss

  Solutions Link:
    https://www.codewars.com/kata/5888cba35194f7f5a800008b/solutions
*/

// Long Solution
/*
const asteriscIt = (n) =>
  [...(Array.isArray(n) ? n : String(n))]
    .join('')
    .split('')
    .map(Number)
    .map((number, index, array) => (number % 2 === 0 && array[index + 1] % 2 === 0 ? `${number}*` : number))
    .join('')
*/

// Short Solution - https://regexr.com/53604
const asteriscIt = (n) => (Array.isArray(n) ? n.join('') : n.toString()).replace(/[02468](?=[02468])/g, '$&*')

// Function Export
module.exports = asteriscIt
