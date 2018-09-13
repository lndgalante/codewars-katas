/*
  Title:
    Chain me

  Description:
    Write a generic function chainer

    Write a generic function chainer that takes a starting value, and an array of functions to execute on it (array of symbols for ruby).

    The input for each function is the output of the previous function (except the first function, which takes the starting value as it's input).
    Return the final value after execution is complete.

  Examples:
    function add(num) {
      return num + 1
    }

    function mult(num) {
      return num * 30
    }

    chain(2, [add, mult]);
    // returns 90;

  Kata Link:
    https://www.codewars.com/kata/chain-me

  Discuss Link:
    https://www.codewars.com/kata/chain-me/discuss

  Solutions Link:
    https://www.codewars.com/kata/chain-me/solutions
*/

// Long Solution
const chain = (input, fs) => fs.reduce((total, func) => func(total), input)

// Function Export
module.exports = chain
