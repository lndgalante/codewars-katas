/*
  Title:
    makeBackronym

  Description:
    back·ro·nym

        An acronym deliberately formed from a phrase whose initial letters spell out a particular word or words, either to create a memorable name or as a fanciful explanation of a word's origin.

        "Biodiversity Serving Our Nation", or BISON

    (from https://en.oxforddictionaries.com/definition/backronym)

    Complete the function to create backronyms. Transform the given string (without spaces) to a backronym, using the preloaded dictionary and return a string of words, separated with a single space (but no trailing spaces).

    The keys of the preloaded dictionary are uppercase letters A-Z and the values are predetermined words, for example:

    dict["P"] == "perfect"

  Examples:
    "dgm" ==> "disturbing gregarious mustache"

    "lkj" ==> "literal klingon joke"

  Notes:

  Kata Link:
    https://www.codewars.com/kata/{kata-name}

  Discuss Link:
    https://www.codewars.com/kata/{kata-name}/discuss

  Solutions Link:
    https://www.codewars.com/kata/{kata-name}/solutions
*/

const dict = {
  A: 'awesome',
  B: 'beautiful',
  C: 'confident',
  D: 'disturbing',
  E: 'eager',
  F: 'fantastic',
  G: 'gregarious',
  H: 'hippy',
  I: 'ingestable',
  J: 'joke',
  K: 'klingon',
  L: 'literal',
  M: 'mustache',
  N: 'newtonian',
  O: 'oscillating',
  P: 'perfect',
  Q: 'queen',
  R: 'rant',
  S: 'stylish',
  T: 'turn',
  U: 'underlying',
  V: 'volcano',
  W: 'weird',
  X: 'xylophone',
  Y: 'yogic',
  Z: 'zero',
}

// Long Solution
/*
const makeBackronym = string =>
  string
    .toUpperCase()
    .split('')
    .map(char => dict[char])
    .join(' ')
*/

// Alternative Solution
const makeBackronym = string =>
  string
    .toUpperCase()
    .split('')
    .reduce((backronym, char) => `${backronym} ${dict[char]}`, '')
    .slice(1)

// Function Export
module.exports = makeBackronym
