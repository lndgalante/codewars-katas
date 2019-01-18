/*
  Title:
    Recursive Replication

  Description:
    You need to design a recursive function called replicate which will receive arguments times and number.
    The function should return an array containing repetitions of the number argument.
    For instance, replicate(3, 5) should return [5,5,5]. If the times argument is negative, return an empty array.

  Notes:
    As tempting as it may seem, do not use loops to solve this problem.

  Kata Link:
    https://www.codewars.com/kata/recursive-replication

  Discuss Link:
    https://www.codewars.com/kata/recursive-replication/discuss

  Solutions Link:
    https://www.codewars.com/kata/recursive-replication/solutions
*/

// Long Solution
/*
const replicate = (times, number, result = []) => {
  if (times <= 0) return result
  return replicate(times - 1, number, [...result, number])
}
*/

// Alternative Solution
/*
const replicate = (times, number) => {
  if (times <= 0) return []
  return [number, ...replicate(times - 1, number)]
}

*/
// Short Solution (Without recursion)
const replicate = (times, number) => Array.from({ length: times }, () => number)

// Function Export
module.exports = replicate
