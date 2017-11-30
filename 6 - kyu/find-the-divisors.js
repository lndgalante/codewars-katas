/* 
  Title:
    Find the divisors!

  Description:
    Create a function named divisors/Divisors that takes an integer and returns an array
    with all of the integer's divisors(except for 1 and the number itself).
    If the number is prime return the string '(integer) is prime' (null in C#)
    (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

  Examples:
    divisors(12); // should return [2,3,4,6]
    divisors(25); // should return [5]
    divisors(13); // should return "13 is prime"

  Notes:
    You can assume that you will only get positive integers as inputs.

  Link:
    https://www.codewars.com/kata/find-the-divisors
*/

// Long Solution
function divisors(integer) {
  const divisors = []

  for (let i = 2; i < 9; i++) {
    if (integer % i === 0) divisors.push(i)
  }

  return divisors.length === 0 ? integer + ' is prime' : divisors
}

// Short Solution

// Test to pass
console.log(divisors(12))
// => It should return [2, 3, 4, 6]
console.log(divisors(15))
// => It should return [3, 5]
console.log(divisors(13))
// => It should return "13 is prime"
console.log(divisors(25))
// => It should return [5]
