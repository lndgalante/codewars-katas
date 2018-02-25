/*
  Title:
    Evil or Odious

  Description:
    The number n is Evil if it has an even number of 1's in its binary expansion.
    First ten: 3, 5, 6, 9, 10, 12, 15, 17, 18, 20

    The number n is Odious if it has an odd number of 1's in its binary expansion.
    First ten: 1, 2, 4, 7, 8, 11, 13, 14, 16, 19

    You have to write a function that determine if a number is Evil of Odious, function should return "It's Evil!" in case of evil number and "It's Odious!" in case of odious number.

  Kata Link:
    https://www.codewars.com/kata/evil-or-odious

  Discuss Link:
    https://www.codewars.com/kata/evil-or-odious/discuss

  Solutions Link:
    https://www.codewars.com/kata/evil-or-odious/solutions
*/

// Long Solution
/*
const evil = n => {
  const total = n
    .toString(2)
    .split('')
    .reduce((total, binary) => total + Number(binary), 0)

  return total % 2 === 0 ? "It's Evil!" : "It's Odious!"
}
*/

// Short Solution
const evil = n =>
  n.toString(2).match(/1/g).length % 2 ? "It's Odious!" : "It's Evil!"

// Function Export
module.exports = evil
