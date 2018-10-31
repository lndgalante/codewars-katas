/*
  Title:
    Split In Parts

  Description:
    The aim of this kata is to split a given string into different strings of equal size (note size of strings is passed to the method)

  Examples:
    Split the below string into other strings of size #3

    'supercalifragilisticexpialidocious'

    Will return a new string
    'sup erc ali fra gil ist ice xpi ali doc iou s'

  Notes:
    - String length is always greater than 0
    - String has no spaces
    - Size is always positive

  Kata Link:
    https://www.codewars.com/kata/split-in-parts

  Discuss Link:
    https://www.codewars.com/kata/split-in-parts/discuss

  Solutions Link:
    https://www.codewars.com/kata/split-in-parts/solutions
*/

// Long Solution
/*
const splitInParts = (s, partLength) =>
  s.match(new RegExp(`.{1,${partLength}}`, 'g')).join(' ')
*/

// Ramda Solution
const R = require('ramda')

const splitInParts = (s, partLength) =>
  R.pipe(
    R.splitEvery(partLength),
    R.join(' ')
  )(s)

// Function Export
module.exports = splitInParts
