/* 
  Title:
    Where my anagrams at?

  Description:
    What is an anagram? Well, two words are anagrams of each other if they both contain the same letters.
    For example:

    'abba' & 'baab' == true

    'abba' & 'bbaa' == true

    'abba' & 'abbba' == false

    Write a function that will find all the anagrams of a word from a list.
    You will be given two inputs a word and an array with words.
    You should return an array of all the anagrams or an empty array if there are none.
    For example:

    anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

    anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

    anagrams('laser', ['lazing', 'lazy',  'lacer']) => []
  
  Link:
    https://www.codewars.com/kata/where-my-anagrams-at
*/

// Long Solution
// function anagrams(word, words) {
//   return words.filter(
//     phrase =>
//       phrase
//         .split('')
//         .sort()
//         .join('') ===
//       word
//         .split('')
//         .sort()
//         .join('')
//   )
// }

// Short Solution
const anagrams = (word, words) =>
  words.filter(
    phrase =>
      phrase
        .split('')
        .sort()
        .join('') ===
      word
        .split('')
        .sort()
        .join('')
  )

// Test to pass
console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']))
// => It should return ['aabb', 'bbaa']
console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']))
// => It should return ['carer', 'racer']
console.log(anagrams('laser', ['lazing', 'lazy', 'lacer']))
// => It should return []
