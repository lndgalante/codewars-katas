/*
  Title:
    Grasshopper - Order of operations

  Description:
    You are running the calculation 2 + 2 * 2 + 2 * 2 and expect to get the answer 32 but instead the function keeps returning 10.
    Fix the function to make it return 32 without changing the number or the operators.

  Kata Link:
    https://www.codewars.com/kata/grasshopper-order-of-operations

  Discuss Link:
    https://www.codewars.com/kata/grasshopper-order-of-operations/discuss

  Solutions Link:
    https://www.codewars.com/kata/grasshopper-order-of-operations/solutions
*/

// Long Solution
const orderOperations = () => (2 + 2) * (2 + 2) * 2

// Function Export
module.exports = orderOperations
