/* 
  Title:
    Find The Parity Outlier

  Description:
    You are given an array (which will have a length of at least 3, but could be very large) containing integers.
    The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N.
    Write a method that takes the array as an argument and returns this "outlier" N.

  Examples:
    [2, 4, 0, 100, 4, 11, 2602, 36]
      Should return: 11 (the only odd number)

    [160, 3, 1719, 19, 11, 13, -21]
      Should return: 160 (the only even number)
  
  Link:
    https://www.codewars.com/kata/find-the-parity-outlier
*/

// Long Solution
function findOutlier(integers) {
  const even = integers.filter(int => int % 2 === 0)
  const odd = integers.filter(int => int % 2 !== 0)

  return even.length === 1 ? even[0] : odd[0]
}

// Short Solution
const findOutlier = integers => {
  const even = integers.filter(int => int % 2 === 0)
  const odd = integers.filter(int => int % 2 !== 0)

  return even.length === 1 ? even[0] : odd[0]
}

// Test to pass
console.log(findOutlier([0, 1, 2]))
// => It should return 1
console.log(findOutlier([1, 2, 3]))
// => It should return 2
console.log(findOutlier([2, 6, 8, 10, 3]))
// => It should return 3
console.log(findOutlier([0, 0, 3, 0, 0]))
// => It should return 3
console.log(findOutlier([1, 1, 0, 1, 1]))
// => It should return 0
console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]))
// => It should return 11
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]))
// => It should return 160
