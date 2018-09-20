/*
  Title:
    Sort with Arrow Functions

  Description:
    Order People by age Using Arrow Function
    Sort and Order people by their age using Arrow Functions

    Task
      Your task is to order a list containg people objects by age using the new Javascript Arrow Functions

    Input
      Input will be a valid array with People objects containing an Age and Name

    Output
      Output will be a valid sorted array with People objects sorted by Age in ascending order

    Reference:
      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

  Kata Link:
    https://www.codewars.com/kata/sort-with-arrow-functions

  Discuss Link:
    https://www.codewars.com/kata/sort-with-arrow-functions/discuss

  Solutions Link:
    https://www.codewars.com/kata/sort-with-arrow-functions/solutions
*/

// Long Solution
const orderPeople = people =>
  [...people].sort(
    ({ age: currentAge }, { age: nextAge }) => currentAge - nextAge
  )

// Function Export
module.exports = orderPeople
