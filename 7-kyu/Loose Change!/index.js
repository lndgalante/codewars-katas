/*
  Title:
    Loose Change!

  Description:
    You've been collecting change all day, and it's starting to pile up in your pocket, but you're too lazy to see how much you've found.
    Good thing you can code!

    Create change_count() to return a dollar amount of how much change you have!

    Valid types of change include:
    penny: 0.01
    nickel: 0.05
    dime: 0.10
    quarter: 0.25
    dollar: 1.00

    These amounts are already preloaded as floats into the CHANGE object for you to use!
    You should return the total in the format $x.xx.

    Examples:
    changeCount('nickel penny dime dollar') == '$1.16'
    changeCount('dollar dollar quarter dime dime') == '$2.45'
    changeCount('penny') == '$0.01'
    changeCount('dime') == '$0.10'

  Notes:

  Kata Link:
    https://www.codewars.com/kata/loose-change-1

  Discuss Link:
    https://www.codewars.com/kata/loose-change-1/discuss

  Solutions Link:
    https://www.codewars.com/kata/loose-change-1/solutions
*/

// Preloaded Data
const CHANGE = { penny: 0.01, nickel: 0.05, dime: 0.1, quarter: 0.25, dollar: 1 }

// Long Solution
/*
const changeCount = change => {
  const amounts = change.split(' ')
  const result = amounts.reduce((result, amount) => result + CHANGE[amount], 0)

  return `${result.toFixed(2)}`
}
*/

// Short Solution
/*
const changeCount = change =>
  `$${change
    .split(' ')
    .reduce((result, amount) => result + CHANGE[amount], 0)
    .toFixed(2)}`
*/

// Improved Solution
const changeCount = change =>
  change
    .split(' ')
    .reduce((result, amount) => result + CHANGE[amount], 0)
    .toLocaleString('en-US', { style: 'currency', currency: 'USD' })

// Function Export
module.exports = changeCount
