/*
  Title:
    The old switcheroo

  Description:
    Write a function vowel2index(str)

    that takes in a string and replaces all the vowels [a,e,i,o,u] with their respective positions within that string.

  Examples:
    vowel2index('this is my string') == 'th3s 6s my str15ng'
    vowel2index('Codewars is the best site in the world') == 'C2d4w6rs 10s th15 b18st s23t25 27n th32 w35rld'
    vowel2index('') == ''

  Notes:
    Your function should be case insensitive to the vowels.

  Kata Link:
    https://www.codewars.com/kata/the-old-switcheroo

  Discuss Link:
    https://www.codewars.com/kata/the-old-switcheroo/discuss

  Solutions Link:
    https://www.codewars.com/kata/the-old-switcheroo/solutions
*/

// Long Solution
/*
const vowel2index = str =>
  str
    .split('')
    .map((char, index) => (/[aeiou]/gi.test(char) ? index + 1 : char))
    .join('')
*/

// Short Solution
const vowel2index = str => str.replace(/[aeiou]/gi, (_, index) => ++index)

// Function Export
module.exports = vowel2index
