/*
  Title:
    Form The Minimum

  Description:
    Given a list of digits, return the smallest number that could be formed from these digits,
    using the digits only once ( ignore duplicates).

  Examples:
    Input >> Output Examples

    1- minValue ({1, 3, 1})  ==> return (13)

    Explanation:

    (13) is the minimum number could be formed from {1, 3, 1} , Without duplications

    2- minValue({5, 7, 5, 9, 7})  ==> return (579)

    Explanation:

    (579) is the minimum number could be formed from {5, 7, 5, 9, 7} , Without duplications

    3- minValue({1, 9, 3, 1, 7, 4, 6, 6, 7}) return  ==> (134679)

    Explanation:

    (134679) is the minimum number could be formed from {1, 9, 3, 1, 7, 4, 6, 6, 7} , Without duplications

  Notes:
    Only positive integers will be passed to the function (> 0 ), no negatives or zeros.

  Kata Link:
    https://www.codewars.com/kata/form-the-minimum

  Discuss Link:
    https://www.codewars.com/kata/form-the-minimum/discuss

  Solutions Link:
    https://www.codewars.com/kata/form-the-minimum/solutions
*/

// Long Solution
const minValue = values => Number([...new Set(values)].sort().join(''))

// Function Export
module.exports = minValue
