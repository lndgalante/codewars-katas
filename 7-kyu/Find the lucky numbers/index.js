/*
  Title:
    Find the lucky numbers

  Description:
    Write a function filterLucky/filter_lucky() that accepts a list of integers and filters the list to only include the elements that contain the digit 7.

  Examples:
    ghci> filterLucky [1,2,3,4,5,6,7,68,69,70,15,17]
    [7,70,17]

  Notes:
    Don't worry about bad input, you will always receive a finite list of integers.

  Kata Link:
    https://www.codewars.com/kata/find-the-lucky-numbers

  Discuss Link:
    https://www.codewars.com/kata/find-the-lucky-numbers/discuss

  Solutions Link:
    https://www.codewars.com/kata/find-the-lucky-numbers/solutions
*/

// Long Solution
/*
const filterLucky = x => x.filter(number => String(number).includes('7'))
*/

// Short Solution
const filterLucky = x => x.filter(number => /7/.test(number))

// Function Export
module.exports = filterLucky
