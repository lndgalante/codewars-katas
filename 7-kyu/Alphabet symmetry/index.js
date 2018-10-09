/*
  Title:
    Alphabet symmetry

  Description:
    Consider the word "abode".
    We can see that the letter a is in position 1 and b is in position 2.
    In the alphabet, a and b are also in positions 1 and 2.
    Notice also that d and e in abode occupy the positions they would occupy in the alphabet, which are positions 4 and 5.

    Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word.
    For example, solve(["abode","ABc","xyzD"]) = [4,3,1]. See test cases for more examples.

    Input will consist of alphabet characters, both uppercase and lowercase. No spaces.

  Kata Link:
    https://www.codewars.com/kata/alphabet-symmetry

  Discuss Link:
    https://www.codewars.com/kata/alphabet-symmetry/discuss

  Solutions Link:
    https://www.codewars.com/kata/alphabet-symmetry/solutions
*/

// Long Solution
/*
const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')

const solve = arr =>
  arr.map(word => {
    const result = [...word].reduce((total, char, index) => {
      const indexInAlphabet = alphabet.findIndex(
        alphabetChar => alphabetChar === char.toLowerCase()
      )

      return index === indexInAlphabet ? total + 1 : total
    }, 0)

    return result
  })
  */

// Short Solution
const solve = arr =>
  arr.map(word =>
    word
      .toLowerCase()
      .split('')
      .reduce(
        (total, char, index) => total + (char.charCodeAt() === index + 97),
        0
      )
  )

// Function Export
module.exports = solve
