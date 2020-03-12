/*
  Title:
    Simple Pig Latin

  Description:
    Move the first letter of each word to the end of it, then add 'ay' to the end of the word.

  Example:
    pigIt('Pig latin is cool'); // igPay atinlay siay oolcay

  Kata Link:
    https://www.codewars.com/kata/simple-pig-latin

  Discuss Link:
    https://www.codewars.com/kata/simple-pig-latin/discuss

  Solutions Link:
    https://www.codewars.com/kata/simple-pig-latin/solutions
*/

// Long Solution
function pigIt(string) {
  return string
    .split(' ')
    .map(
      word =>
        `${word
          .split('')
          .splice(1)
          .join('')}${word.charAt(0)}ay`
    )
    .join(' ')
}

// Function Export
module.exports = pigIt
