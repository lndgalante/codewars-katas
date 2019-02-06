/*
  Title:
    makeBackronym

  Description:
    Implement a function called makeAcronym that returns the first letters of each word in a passed in string.

    Make sure the letters returned are uppercase.

    If the value passed in is not a string return 'Not a string'.

    If the value passed in is a string which contains characters other than spaces and alphabet letters, return 'Not letters'.

    If the string is empty, just return the string itself: "".

  Examples:
    'Hello codewarrior' -> 'HC'

    'a42' -> 'Not letters'

    42 -> 'Not a string'

    [2,12] -> 'Not a string'

    {name: 'Abraham'} -> 'Not a string'

  Notes:

  Kata Link:
    https://www.codewars.com/kata/{kata-name}

  Discuss Link:
    https://www.codewars.com/kata/{kata-name}/discuss

  Solutions Link:
    https://www.codewars.com/kata/{kata-name}/solutions
*/

// Long Solution
/*
const makeAcronym = string => {
  if (typeof string !== 'string') return 'Not a string'
  if (string === '') return string
  if (!/^[a-z\s]+$/gi.test(string)) return 'Not letters'

  return string
    .split(' ')
    .map(([firstChar]) => firstChar)
    .join('')
    .toUpperCase()
}
*/

// Short Solution
const makeAcronym = string => {
  if (typeof string !== 'string') return 'Not a string'
  if (/\d/gi.test(string)) return 'Not letters'

  return string
    .split(' ')
    .map(([firstChar]) => firstChar)
    .join('')
    .toUpperCase()
}

// Function Export
module.exports = makeAcronym
