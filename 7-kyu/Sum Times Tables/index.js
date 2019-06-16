/*
  Title:
    Sum Times Tables

  Description:
    Write a function sumTimesTables which sums the result of the sums of the elements specified in tables multiplied by all the numbers in between min and max including themselves.

  Examples:
    For example, for sumTimesTables([2,5],1,3) the result should be the same as
      2*1 + 2*2 + 2*3 +
      5*1 + 5*2 + 5*3

    I.e. the table of two from 1 to 3 plus the table of five from 1 to 3

  Notes:
    All the numbers are integers but you must take in account:
    - tables could be empty.
    - min could be negative.
    - max could be really big.

  Kata Link:
    https://www.codewars.com/kata/sum-times-tables

  Discuss Link:
    https://www.codewars.com/kata/sum-times-tables/discuss

  Solutions Link:
    https://www.codewars.com/kata/sum-times-tables/solutions
*/

// Long Solution
const multiplyNumberTable = (number, min, max) => {
  return Array.from({ length: max - min + 1 }, (_, index) => number * (min + index))
}

const sumTable = table => table.reduce((total, number) => total + number, 0)

function sumTimesTables(tables, min, max) {
  const tablesMultiplications = tables.map(table => sumTable(multiplyNumberTable(table, min, max)))
  return sumTable(tablesMultiplications)
}

// Function Export
module.exports = sumTimesTables
