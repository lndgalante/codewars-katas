/*
  Title:
    Fizz / Buzz

  Description:
    Write a function that takes an integer and returns an array [A, B, C],
    where A is the number of multiples of 3 (but not 5) below the given integer,
    B is the number of multiples of 5 (but not 3) below the given integer
    and C is the number of multiples of 3 and 5 below the given integer.

  Examples:
    For example, solution(20) should return [5, 2, 1]

  Kata Link:
    https://www.codewars.com/kata/fizz-slash-buzz

  Discuss Link:
    https://www.codewars.com/kata/fizz-slash-buzz/discuss

  Solutions Link:
    https://www.codewars.com/kata/fizz-slash-buzz/solutions
*/

// Long Solution
/*
const solution = number => {
  const integers = Array.from({ length: number }, (_, index) => index)

  const A = integers.filter(integer => integer % 3 === 0 && integer % 5 !== 0)
  const B = integers.filter(integer => integer % 3 !== 0 && integer % 5 === 0)
  const C = integers.filter(integer => integer % 3 === 0 && integer % 5 === 0)

  return [A.length, B.length, C.length - 1]
}
*/

// Short Solution
const solution = n =>
  [...new Array(n).keys()].slice(1).reduce(
    (result, number) => {
      if (number % 15 === 0) result[2]++
      else if (number % 3 === 0) result[0]++
      else if (number % 5 === 0) result[1]++

      return result
    },
    [0, 0, 0]
  )

// Function Export
module.exports = solution
