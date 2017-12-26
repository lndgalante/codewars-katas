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

  Kata Link:
    https://www.codewars.com/kata/find-the-divisors

  Discuss Link:
    https://www.codewars.com/kata/find-the-divisors/discuss

  Solutions Link:
    https://www.codewars.com/kata/find-the-divisors/solutions
*/

// Long Solution
function divisors(integer) {
  const divisors = []
  for (let i = 2; i < integer; i++) {
    if (integer % i === 0) divisors.push(i)
  }

  return divisors.length ? divisors : `${integer} is prime`
}

/*
  Solution for test issue in CodeWars plattform
  String.prototype.join = () => true
*/

// Function Export
module.exports = divisors
