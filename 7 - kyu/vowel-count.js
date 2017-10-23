/* 
  Title:
    Vowel Count

  Description:
    Return the number (count) of vowels in the given string.

    We will consider a, e, i, o, and u as vowels for this Kata.
  
  Link:
    https://www.codewars.com/kata/vowel-count
*/

// Long Solution
function getCount(str) {
  return str
    .split('')
    .reduce((sum, value) => (/[aeiou]/.test(value) ? sum + 1 : sum), 0)
}

// Short Solution
const getCount = str => (str.match(/[aeiou]/gi) || []).length

// Test to pass
console.log(getCount('abracadabra'))
// => It should return 5
