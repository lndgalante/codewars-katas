/*
  Title:
    Calculate Meal Total

  Description:
    Create a function that returns the total of a meal including tip and tax.
    You should not tip on the tax.

    You will be given the subtotal, the tax as a percentage and the tip as a percentage.
    Please round your result to two decimal places.

  Examples:

  Notes:

  Kata Link:
    https://www.codewars.com/kata/calculate-meal-total

  Discuss Link:
    https://www.codewars.com/kata/calculate-meal-total/discuss

  Solutions Link:
    https://www.codewars.com/kata/calculate-meal-total/solutions
*/

// Long Solution
/*
const calculateTotal = (subtotal, tax, tip) =>
  Math.round(((subtotal * tax) / 100 + (subtotal * tip) / 100 + subtotal) * 100) / 100
*/

// Short Solution
const calculateTotal = (subtotal, tax, tip) => Math.round(subtotal * (100 + tax + tip)) / 100

// Function Export
module.exports = calculateTotal
