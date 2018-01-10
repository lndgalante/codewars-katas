/*
  Title:
    No oddities here

  Description:
    Write a small function that returns the values of an array that are not odd.

    All values in the array will be integers. Return the good values in the order they are given.

    function noOdds( values )

  Kata Link:
    https://www.codewars.com/kata/no-oddities-here

  Discuss Link:
    https://www.codewars.com/kata/no-oddities-here/discuss

  Solutions Link:
    https://www.codewars.com/kata/no-oddities-here/solutions
*/

// Long Solution
/*
function noOdds(values) {
  return values.filter(value => value % 2 === 0)
}
*/

// Short Solution
const noOdds = values => values.filter(value => value % 2 === 0)

// Function Export
module.exports = noOdds
