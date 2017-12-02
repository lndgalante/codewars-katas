/* 
  Title:
    Disemvowel Trolls

  Description:
    Trolls are attacking your comment section!

    A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

    Your task is to write a function that takes a string and return a new string with all vowels removed.

  Examples:
    "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

  Link:
    https://www.codewars.com/kata/disemvowel-trolls/train/javascript
*/

// Long Solution
/* 
function disemvowel(str) {
  // ^ negates the regex
  return str.match(/[^aeiou]/gi).join('')
} 
*/

// Short Solution
const disemvowel = str => str.replace(/[aeiou]/gi, '')

// Exports function
module.exports = disemvowel
