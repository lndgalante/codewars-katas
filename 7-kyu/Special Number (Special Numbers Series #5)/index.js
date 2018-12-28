/*
  Title:
    Special Number (Special Numbers Series #5)

  Description:
    A number is a Special Number if it’s digits only consist 0, 1, 2, 3, 4 or 5

    Given a number determine if it special number or not.

  Examples:
    Input >> Output Examples

    1-  specialNumber(2) ==> return "Special!!"

      Explanation:

      It's a single-digit number within the interval [0:5] .

    2-  specialNumber(9) ==> return "NOT!!"

      Explanation:

      Although ,it's a single-digit number but Outside the interval [0:5] .

    3- specialNumber(23) ==> return "Special!!"

      Explanation:

      All the number's digits formed from the interval [0:5] digits .

    4- specialNumber(39) ==> return "NOT!!"

      Explanation:

      Although , there is a digit (3) Within the interval But the second digit is not (Must be ALL The Number's Digits ) .

    5- specialNumber(59) ==> return "NOT!!"

      Explanation:

      Although , there is a digit (5) Within the interval But the second digit is not (Must be ALL The Number's Digits ) .

    6- specialNumber(513) ==> return "Special!!"

    7- specialNumber(709) ==> return "NOT!!"

  Notes:
    The number passed will be positive (N > 0) .

    All single-digit numbers with in the interval [0:5] are considered as special number.

  Kata Link:
    https://www.codewars.com/kata/special-number-special-numbers-series-number-5

  Discuss Link:
    https://www.codewars.com/kata/special-number-special-numbers-series-number-5/discuss

  Solutions Link:
    https://www.codewars.com/kata/special-number-special-numbers-series-number-5/solutions
*/

// Long Solution
/*
const specialNumber = (n, specialRange = [0, 1, 2, 3, 4, 5]) =>
  [...String(n)].map(Number).every(number => specialRange.includes(number)) ? 'Special!!' : 'NOT!!'
*/

// Short Solution
const specialNumber = n => (/^[0-5]+$/g.test(n) ? 'Special!!' : 'NOT!!')

// Function Export
module.exports = specialNumber
