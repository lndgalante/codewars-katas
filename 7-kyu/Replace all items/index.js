/*
  Title:
    Replace all items

  Description:
    Write function replaceAll (Python: replace_all) that will replace all occurrences of an item with another.

    Python / JavaScript: The function has to work for strings and lists.

  Examples:
    Example: replaceAll [1,2,2] 1 2 -> in list [1,2,2] we replace 1 with 2 to get new list [2,2,2]

    replaceAll(replaceAll(array: [1,2,2], old: 1, new: 2) // [2,2,2]

  Kata Link:
    https://www.codewars.com/kata/replace-all-items

  Discuss Link:
    https://www.codewars.com/kata/replace-all-items/discuss

  Solutions Link:
    https://www.codewars.com/kata/replace-all-items/solutions
*/

// Long Solution
/*
const replaceAll = (seq, find, replace) =>
  typeof seq === 'string'
    ? [...seq].map(value => (value === find ? replace : value)).join('')
    : seq.map(value => (value === find ? replace : value))
*/

// Alternative Solution
const replaceAll = (seq, find, replace) =>
  typeof seq === 'string'
    ? seq.split(find).join(replace)
    : seq.map(value => (value === find ? replace : value))

// Function Export
module.exports = replaceAll
