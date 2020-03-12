/*
  Title:
    Scrabble Score

  Description:
    Write a program that, given a word, computes the scrabble score for that word.
    Letter Values

    You'll need these:

    Letter                           Value
    A, E, I, O, U, L, N, R, S, T       1
    D, G                               2
    B, C, M, P                         3
    F, H, V, W, Y                      4
    K                                  5
    J, X                               8
    Q, Z                               10

    There will be preloaded a $dict with all this values in your kata in form of a hash $dict["E"] => 1.

  Examples:
    scrabbleScore('cabbage') // => 14

    "cabbage" should be scored as worth 14 points:

    3 points for C
    1 point for A, twice
    3 points for B, twice
    2 points for G
    1 point for E

    And to total:

    3 + 2*1 + 2*3 + 2 + 1
    = 3 + 2 + 6 + 3
    = 5 + 9
    = 14

  Notes:
    Empty string should return 0. The string can contain whitespaces, you should calculate the scrablle score only of the letters in that string.
    scrabble_score('')
    # => 0

    scrabbleScore('') // => 0
    scrabbleScore('ca bba g  e') // => 14

    scrabbleScore " "           `shouldBe` 0
    scrabbleScore "st re et"    `shouldBe` 6
    scrabbleScore "ca bba g  e" `shouldBe` 14

  Kata Link:
    https://www.codewars.com/kata/scrabble-score

  Discuss Link:
    https://www.codewars.com/kata/scrabble-score/discuss

  Solutions Link:
    https://www.codewars.com/kata/scrabble-score/solutions
*/

// Preloaded Data
const $dict = {
  E: 1,
  A: 1,
  I: 1,
  O: 1,
  N: 1,
  R: 1,
  T: 1,
  L: 1,
  S: 1,
  U: 1,
  D: 2,
  G: 2,
  B: 3,
  C: 3,
  M: 3,
  P: 3,
  F: 4,
  H: 4,
  V: 4,
  W: 4,
  Y: 4,
  K: 5,
  J: 8,
  X: 8,
  Q: 10,
  Z: 10,
}

// Long Solution
/*
const scrabbleScore = str => {
  const strUpperCase = str.toUpperCase()
  let accumulator = 0

  for (let index = 0; index < strUpperCase.length; index++) {
    const char = strUpperCase[index]
    if ($dict[char]) accumulator += $dict[char]
  }

  return accumulator
}
*/

// Short Solution
const scrabbleScore = string => [...string.toUpperCase()].reduce((total, char) => total + ($dict[char] || 0), 0)

// Function Export
module.exports = scrabbleScore
