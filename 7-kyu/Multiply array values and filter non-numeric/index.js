/*
  Title:
    Multiply array values and filter non-numeric

  Description:
    Your task is to write a function, which takes two arguments and returns a sequence.
    First argument is a sequence of values, second is multiplier.
    The function should filter all non-numeric values and multiply the rest by given multiplier.


  Kata Link:
    https://www.codewars.com/kata/55ed875819ae85ca8b00005c

  Discuss Link:
    https://www.codewars.com/kata/55ed875819ae85ca8b00005c/discuss

  Solutions Link:
    https://www.codewars.com/kata/55ed875819ae85ca8b00005c/solutions
*/

// Long Solution
/*
const multiplyAndFilter = (array, multiplier) => {
  return array.filter((element) => typeof element === 'number').map((number) => number * multiplier)
}
*/

// Short Solution
const multiplyAndFilter = (array, multiplier) => array.filter(Number.isFinite).map((number) => number * multiplier)

// Function Export
module.exports = multiplyAndFilter
