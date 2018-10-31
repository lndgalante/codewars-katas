/*
  Title:
    Word values

  Description:
    Given a string "abc" and assuming that each letter in the string has a value equal to its position in the alphabet,
    our string will have a value of 1 + 2 + 3 = 6.
    This means that: a = 1, b = 2, c = 3 ....z = 26.

    You will be given a list of strings and your task will be to return the values of the strings as explained above
    multiplied by the position of that string in the list. For our purpose, position begins with 1.

    nameValue ["abc","abc abc"] should return [6,24] because of [ 6 * 1, 12 * 2 ]. Note how spaces are ignored.

    "abc" has a value of 6, while "abc abc" has a value of 12.
    Now, the value at position 1 is multiplied by 1 while the value at position 2 is multiplied by 2.

    Input will only contain lowercase characters and spaces.

  Kata Link:
    https://www.codewars.com/kata/word-values

  Discuss Link:
    https://www.codewars.com/kata/word-values/discuss

  Solutions Link:
    https://www.codewars.com/kata/word-values/solutions
*/

// Long Solution
/*
const wordValue = a =>
  a
    .map(words =>
      words.split(' ').reduce((total, word) => {
        const charValues = [...word].reduce(
          (total, char) => total + char.charCodeAt(0) - 96,
          0
        )
        return total + charValues
      }, 0)
    )
    .map((value, index) => value * (index + 1))
*/

// Short Solution
/*
const wordValue = a =>
  a
    .map(words =>
      [...words]
        .map(char => char.replace(/\w/g, char => char.charCodeAt(0) - 96))
        .reduce((total, value) => total + Number(value), 0)
    )
    .map((value, index) => value * (index + 1))
*/

// Ramda Solution
const R = require('ramda')

const alphabetIndex = char => (/\w/.test(char) ? char.charCodeAt(0) - 96 : 0)

const mapIndexed = R.addIndex(R.map)

const wordValue = a =>
  R.pipe(
    R.map(
      R.pipe(
        R.split(''),
        R.reduce((total, char) => total + alphabetIndex(char), 0)
      )
    ),
    mapIndexed((value, index) => value * (index + 1))
  )(a)

// Function Export
module.exports = wordValue
