/*
  Title:
    STRONGN Strong Number (Special Numbers Series #2)

  Description:
    Definition
    Strong number is the number that the sum of the factorial of its digits is equal to number itself.

    For example :  145    , since
    1! + 4! + 5! = 1 + 24 + 120 = 145
    So, 145 is a Strong number.

    Task
    Given a number, Find if it is Strong or not .

  Examples:
    Input >> Output Examples

    1- strong_num (1)  ==> return "STRONG!!!!"

    Explanation:
    Since , the sum of its digits' factorial of (1) is equal to number itself (1) , Then its a Strong .

    2- strong_num (123) ==> return "Not Strong !!"

    Explanation:
    Since , the sum of its digits' factorial of 1! + 2! + 3! = 9 is not equal to number itself (123) , Then it's  Not Strong .

    3- strong_num (2)  ==>  return "STRONG!!!!"

    Explanation:
    Since , the sum of its digits' factorial of 2! = 2 is equal to number itself (2) , Then its a Strong .

    4- strong_num (150) ==> return "Not Strong !!"

    Explanation:
    Since , the sum of its digits' factorial of 1! + 5! + 0! = 122 is not equal to number itself (150) , Then it's  Not Strong .

  Notes:
    - Number passed is always  Positive
    - Return the result as String

  Kata Link:
    https://www.codewars.com/kata/strongn-strong-number-special-numbers-series-number-2

  Discuss Link:
    https://www.codewars.com/kata/strongn-strong-number-special-numbers-series-number-2/discuss

  Solutions Link:
    https://www.codewars.com/kata/strongn-strong-number-special-numbers-series-number-2/solutions
*/

// Helpers
const factorial = n => (n < 0 ? null : (n === 0 ? 1 : n * factorial(--n)))

// Long Solution
/*
const strong = n => {
  const numbers = [...String(n)].map(Number)
  const totalFactorial = numbers.reduce((total, digit) => total + factorial(digit), 0)

  return totalFactorial === n ? 'STRONG!!!!' : 'Not Strong !!'
}
*/

// Short Solution
const strong = n =>
  [...String(n)].map(Number).reduce((total, digit) => total + factorial(digit), 0) === n
    ? 'STRONG!!!!'
    : 'Not Strong !!'

// Function Export
module.exports = strong
