/*
  Title:
    Pizza Payments

  Description:
    Kate and Michael want to buy a pizza and share it.
    Depending on the price of the pizza, they are going to divide the costs:

    * If the pizza is less than €5,- Michael invites Kate, so Michael pays the full price.
    * Otherwise Kate will contribute 1/3 of the price, but no more than €10 (she's broke :-) and Michael pays the rest.

    How much is Michael going to pay? Calculate the amount with two decimals, if necessary.

  Kata Link:
    https://www.codewars.com/kata/pizza-payments

  Discuss Link:
    https://www.codewars.com/kata/pizza-payments/discuss

  Solutions Link:
    https://www.codewars.com/kata/pizza-payments/solutions
*/

// Long Solution
/*
const parseNumber = number => Number(number.toFixed(2))

const michaelPays = costs => {
  if (costs < 5) return parseNumber(costs)

  const oneThird = costs * (1 / 3)
  const katePays = oneThird > 10 ? 10 : oneThird
  const michaelPays = costs - katePays

  return parseNumber(michaelPays)
}
*/

// Short Solution
const parseNumber = number => Number(number.toFixed(2))

const michaelPays = costs =>
  parseNumber(Math.max(costs < 5 ? costs : costs * (2 / 3), costs - 10))

// Function Export
module.exports = michaelPays
