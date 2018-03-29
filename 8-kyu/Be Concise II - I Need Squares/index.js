/*
  Title:
    Be Concise II - I Need Squares

  Description:
    You are given a program squaresOnly that accepts an array of natural numbers up to and including
    100
    (and including 0) of length >= 1, array, and returns a new array containing only square numbers that have appeared in the input array.

    Refactor the solution to use as few characters as possible. There is a maximum character limit of 127. Here are a few hints:

    There are a lot of handy built-in Array methods in Javascript that you may have never heard of even after completing a basic course in Javascript (e.g. those provided by Codecademy) - well, at least I haven't heard of until quite recently. You may also want to research any new built-in methods offered by ES6, the newest specification of Javascript at the time of writing.
    Don't you think the array parameter is a bit wordy? ;)

  Kata Link:
    https://www.codewars.com/kata/be-concise-ii-i-need-squares

  Discuss Link:
    https://www.codewars.com/kata/be-concise-ii-i-need-squares/discuss

  Solutions Link:
    https://www.codewars.com/kata/be-concise-ii-i-need-squares/solutions
*/

// Long Solution
const squaresOnly = array =>
  array.filter(num => Number.isInteger(Math.sqrt(num)))

// Function Export
module.exports = squaresOnly
