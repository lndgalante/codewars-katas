/*
  Title:
    Insert Dashes 2

  Description:
    This is a follow up from my kata Insert Dashes.
    Write a function insertDashII(num) that will insert dashes ('-') between each two odd numbers and asterisk ('*') between each even numbers in num

  Examples:
    insertDashII(454793) --> 4547-9-3
    insertDashII(1012356895) --> 10123-56*89-5
    Zero shouldn't be considered even or odd.

  Kata Link:
    https://www.codewars.com/kata/insert-dashes-2

  Discuss Link:
    https://www.codewars.com/kata/insert-dashes-2/discuss

  Solutions Link:
    https://www.codewars.com/kata/insert-dashes-2/solutions
*/

// Long Solution - https://regexr.com/47jqs
const insertDashII = number =>
  String(number)
    .replace(/([13579])(?=[13579])/g, '$1-')
    .replace(/([2468])(?=[2468])/g, '$1*')

// Function Export
module.exports = insertDashII
