/*
  Title:
    Simple Fun #37: House Numbers Sum

  Description:
    A boy is walking a long way from school to his home.
    To make the walk more fun he decides to add up all the numbers of the houses that he passes by during his walk.
    Unfortunately, not all of the houses have numbers written on them, and on top of that the boy is regularly taking turns to change streets, so the numbers don't appear to him in any particular order.

    At some point during the walk the boy encounters a house with number 0 written on it,
    which surprises him so much that he stops adding numbers to his total right after seeing that house.

    For the given sequence of houses determine the sum that the boy will get.
    It is guaranteed that there will always be at least one 0 house on the path.

  Examples:
    For inputArray = [5, 1, 2, 3, 0, 1, 5, 0, 2], the output should be 11.

    The answer was obtained as 5 + 1 + 2 + 3 = 11.

  Notes:
    - [input] integer array inputArray
      Constraints: 5 ≤ inputArray.length ≤ 50, 0 ≤ inputArray[i] ≤ 10.

    - [output] an integer

  Kata Link:
    https://www.codewars.com/kata/simple-fun-number-37-house-numbers-sum

  Discuss Link:
    https://www.codewars.com/kata/simple-fun-number-37-house-numbers-sum/discuss

  Solutions Link:
    https://www.codewars.com/kata/simple-fun-number-37-house-numbers-sum/solutions
*/

// Long Solution
/*
const houseNumbersSum = inputArray =>
  inputArray
    .slice(0, inputArray.findIndex(houseNumber => houseNumber === 0))
    .reduce((total, houseNumber) => total + houseNumber, 0)
*/

// Short Solution
const houseNumbersSum = inputArray =>
  inputArray.slice(0, inputArray.indexOf(0)).reduce((total, houseNumber) => total + houseNumber, 0)

// Function Export
module.exports = houseNumbersSum
