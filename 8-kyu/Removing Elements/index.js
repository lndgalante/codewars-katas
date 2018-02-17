/*
  Title:
    Removing Elements

  Description:
    Take an array and remove every second element out of that array.
    Always keep the first element and start removing with the next element.

  Examples:
    myArr = ['Keep', 'Remove', 'Keep', 'Remove', 'Keep', ...];

  Notes:
    None of the arrays will be empty, so you don't have to worry about that!

  Kata Link:
    https://www.codewars.com/kata/removing-elements

  Discuss Link:
    https://www.codewars.com/kata/removing-elements/discuss

  Solutions Link:
    https://www.codewars.com/kata/removing-elements/solutions
*/

// Long Solution
const removeEveryOther = arr => arr.filter((_, i) => i % 2 === 0)

// Function Export
module.exports = removeEveryOther
