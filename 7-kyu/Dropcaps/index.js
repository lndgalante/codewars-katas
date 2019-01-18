/*
  Title:
    Dropcaps

  Description:
    DropCaps means that the first letter of the starting word of the paragraph should be in caps and the remaining lowercase, same like you see in the newspaper.
    But for a change lets do that for each and every word of the given String. Your task is to capitalize very word that has length greater than 2, leaving smaller words as they are.
    *should work also on Leading and Trailing Spaces and caps.

  Examples:
    dropCap('apple') => "Apple"
    dropCap('apple of banana'); => "Apple of Banana"
    dropCap('one   space'); => "One   Space
    dropCap('   space WALK   '); => "   Space Walk   "

  Notes:
    You will be provided atleast one word and should take string as input and return string as output.

  Kata Link:
    https://www.codewars.com/kata/dropcaps

  Discuss Link:
    https://www.codewars.com/kata/dropcaps/discuss

  Solutions Link:
    https://www.codewars.com/kata/dropcaps/solutions
*/

// Long Solution
/*
const capitalize = str => `${str.slice(0, 1).toUpperCase()}${str.slice(1).toLowerCase()}`

const dropCap = n =>
  n
    .split(' ')
    .map(word => (word.length > 2 ? capitalize(word) : word))
    .join(' ')
*/

// Short Solution
const dropCap = n => n.replace(/\S{3,}/g, word => word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase())

// Function Export
module.exports = dropCap
