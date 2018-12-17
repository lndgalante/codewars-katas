/*
  Title:
    Simple Fun #20: First Reverse Try

  Description:
    Reversing an array can be a tough task, especially for a novice programmer.
    Mary just started coding, so she would like to start with something basic at first.
    Instead of reversing the array entirely, she wants to swap just its first and last elements.

    Given an array arr, swap its first and last elements and return the resulting array.

  Examples:
     For arr = [1, 2, 3, 4, 5], the output should be [5, 2, 3, 4, 1]

  Notes:
    - [input] integer array arr
      Constraints: 0 ≤ arr.length ≤ 50, -1000 ≤ arr[i] ≤ 1000

    - [output] an integer array
      Array arr with its first and its last elements swapped.

  Kata Link:
    https://www.codewars.com/kata/simple-fun-number-20-first-reverse-try

  Discuss Link:
    https://www.codewars.com/kata/simple-fun-number-20-first-reverse-try/discuss

  Solutions Link:
    https://www.codewars.com/kata/simple-fun-number-20-first-reverse-try/solutions
*/

// Long Solution
/*
const firstReverseTry = arr => {
  if (arr.length <= 1) return arr

  const copyArray = [...arr]
  const lastElement = copyArray.pop()
  const firstElement = copyArray.shift()

  return [lastElement, ...copyArray, firstElement]
}
*/

// Short Solution
const firstReverseTry = ([...arr]) => (arr.length > 1 ? [arr.pop(), ...arr.slice(1), arr.shift()] : arr)

// Function Export
module.exports = firstReverseTry
