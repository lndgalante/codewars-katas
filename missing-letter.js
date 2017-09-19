/* 
  Description ⚔️
    Find the missing letter
    Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

    You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
    The array will always contain letters in only one case.

  Example:
    ['a','b','c','d','f'] -> 'e'
    ['O','Q','R','S'] -> 'P'
    (Use the English alphabet with 26 letters!)
*/

// Long Solution
function findMissingLetter(letters) {
  const alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ]

  // const total = letters.map((letter, i) => {
  //   if (alphabet.includes(letter)) {
  //     return alphabet.indexOf(letter)
  //   }
  // })

  return total
}

// One-line Solution

// Test to pass
console.log(findMissingLetter(['a', 'b', 'c', 'd', 'f']))
console.log(findMissingLetter(['t', 'u', 'v', 'x'])) // => It should return 'e'
console.log(findMissingLetter(['O', 'Q', 'R', 'S'])) // => It should return 'P'
