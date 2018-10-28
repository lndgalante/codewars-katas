/*
  Title:
    Filter Coffee

  Description:
    You love coffee and want to know what beans you can afford to buy it.

    The first argument to your search function will be a number which represents your budget.

    The second argument will be an array of coffee bean prices.

    Your 'search' function should return the stores that sell coffee within your budget.

    The search function should return a string of prices for the coffees beans you can afford.
    The prices in this string are to be sorted in ascending order.

  Kata Link:
    https://www.codewars.com/kata/filter-coffee

  Discuss Link:
    https://www.codewars.com/kata/filter-coffee/discuss

  Solutions Link:
    https://www.codewars.com/kata/filter-coffee/solutions
*/

// Long Solution
const search = (budget, prices) =>
  prices
    .filter(price => price <= budget)
    .sort((a, b) => a - b)
    .join()

// Function Export
module.exports = search
