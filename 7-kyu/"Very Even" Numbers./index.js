/*
  Title:
    "Very Even" Numbers.

  Description:
    Write a function that returns true if the number is a "Very Even" number.
    If a number is a single digit, then it is simply "Very Even" if it itself is even.
    If it has 2 or more digits, it is "Very Even" if the sum of it's digits is "Very Even".

  Examples:
    input(88) => returns false -> 8 + 8 = 16 -> 1 + 6 = 7 => 7 is odd
    input(222) => returns true
    input(5) => returns false
    input(841) => returns true -> 8 + 4 + 1 = 13 -> 1 + 3 => 4 is evenNote: The numbers will always be positive!

  Kata Link:
    https://www.codewars.com/kata/58c9322bedb4235468000019

  Discuss Link:
    https://www.codewars.com/kata/58c9322bedb4235468000019/discuss

  Solutions Link:
    https://www.codewars.com/kata/58c9322bedb4235468000019/solutions
*/

// Long Solution
/*
function isVeryEvenNumber(n) {
  const numbers = String(n).split('').map(Number)
  const totalSum = numbers.reduce((acc, number) => acc + number, 0)

  while (String(totalSum).length > 1) return isVeryEvenNumber(totalSum)

  return totalSum % 2 === 0
}
*/

// Short Solution
const isVeryEvenNumber = (n) => (((n - 1) % 9) + 1) % 2 === 0

// Function Export
module.exports = isVeryEvenNumber
