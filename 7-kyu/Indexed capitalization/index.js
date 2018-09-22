/*
  Title:
    Indexed capitalization

  Description:
    Given a string and an array of integers representing indices, capitalize all letters at the given indices.

  Examples:
    capitalize("abcdef",[1,2,5]) = "aBCdeF"
    capitalize("abcdef",[1,2,5,100]) = "aBCdeF". There is no index 100.

  Notes:
    The input will be a lowercase string with no spaces and an array of digits.

  Kata Link:
    https://www.codewars.com/kata/indexed-capitalization

  Discuss Link:
    https://www.codewars.com/kata/indexed-capitalization/discuss

  Solutions Link:
    https://www.codewars.com/kata/indexed-capitalization/solutions
*/

// Long Solution
/*
const capitalize = (s, arr) => {
  let str = s.split('')
  arr.forEach(index => {
    str[index] = str[index] ? str[index].toUpperCase() : str[index]
  })
  return str.join('')
}
*/

// Short Solution
const capitalize = (s, arr) =>
  [...s]
    .map((char, index) => (arr.includes(index) ? char.toUpperCase() : char))
    .join('')

// Alternative Solution
/*
const capitalize = (s, arr) =>
  s.replace(
    /./g,
    (char, index) => (arr.includes(index) ? char.toUpperCase() : char)
  )
*/

// Function Export
module.exports = capitalize
