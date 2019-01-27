/*
  Title:
    Difference between biggest 2 numbers

  Description:
    You have an array of integers. You need to calcurate the difference between 1st biggest number and 2nd biggest number of an array.

    diffBig2([10, 5, 2]);

    In this case, 1st biggest number is 10 and 2nd biggest number is 5. So, this function return 5, the result of 10 - 5.
    You can assume that the input array must have 2 or more elements.
    The input array has the sort() method disabled, so you will have to solve it in another way.

  Kata Link:
    https://www.codewars.com/kata/difference-between-biggest-2-numbers

  Discuss Link:
    https://www.codewars.com/kata/difference-between-biggest-2-numbers/discuss

  Solutions Link:
    https://www.codewars.com/kata/difference-between-biggest-2-numbers/solutions
*/

// Long Solution
/*
 const diffBig2 = arr => {
  const firstBiggest = Math.max(...arr)
  const arrWithoutFirstBiggest = [
    ...arr.slice(0, arr.indexOf(firstBiggest)),
    ...arr.slice(arr.indexOf(firstBiggest) + 1),
  ]
  const secondBiggest = Math.max(...arrWithoutFirstBiggest)

  return firstBiggest - secondBiggest
}
*/

// Short Solution
const diffBig2 = arr => {
  const firstBiggest = Math.max(...arr)
  const secondBiggest = Math.max(...arr.filter((_, i) => i !== arr.indexOf(firstBiggest)))

  return firstBiggest - secondBiggest
}

// Function Export
module.exports = diffBig2
