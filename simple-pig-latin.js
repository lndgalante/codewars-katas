/* 
  Description ⚔️
    Move the first letter of each word to the end of it, then add 'ay' to the end of the word.
  
  Example:
    pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
*/

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

// Test to pass
console.log(pigIt('Pig latin is cool')) // => It should return 'igPay atinlay siay oolcay'
console.log(pigIt('This is my string')) // => It should return 'hisTay siay ymay tringsay'
