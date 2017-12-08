/* 
  Title:
    Simple Pig Latin

  Description:
    Move the first letter of each word to the end of it, then add 'ay' to the end of the word.
  
  Example:
    pigIt('Pig latin is cool'); // igPay atinlay siay oolcay

  Link:
    https://www.codewars.com/kata/520b9d2ad5c005041100000f
*/

// Long Solution
function pigIt(str) {
  return str
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
