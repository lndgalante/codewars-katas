/*
  Title:
    To square(root) or not to square(root)

  Description:
    #To square(root) or not to square(root)

    Write a method, that will get an integer array as parameter and will process every number from this array.
    Return a new array with processing every number of the input-array like this:

    If the number has an integer square root, take this, otherwise square the number.

    [4,3,9,7,2,1] -> [2,9,3,49,4,1]
    The input array will always contain only positive numbers and will never be empty or null.

    The input array should not be modified!

    Have fun coding it and please don't forget to vote and rank this kata! :-)

    I have also created other katas. Take a look if you enjoyed this kata!

  Examples:

  Notes:

  Kata Link:
    https://www.codewars.com/kata/to-square-root-or-not-to-square-root

  Discuss Link:
    https://www.codewars.com/kata/to-square-root-or-not-to-square-root/discuss

  Solutions Link:
    https://www.codewars.com/kata/to-square-root-or-not-to-square-root/solutions
*/

// Long Solution
const isSquareRootInteger = num => Number.isInteger(Math.sqrt(num))

const squareOrSquareRoot = array =>
  array.map(num => (isSquareRootInteger(num) ? Math.sqrt(num) : num ** 2))

// Function Export
module.exports = squareOrSquareRoot
