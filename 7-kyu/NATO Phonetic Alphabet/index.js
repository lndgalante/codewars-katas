/*
  Title:
    NATO Phonetic Alphabet

  Description:
    In this kata, we're going to create the function nato that takes a word and returns a string spells the word using the NATO phonetic alphabet.

    There should be a space between each word in the returned string, and the first letter of each word should be capitalized.

    For those of you that don't want your fingers to bleed, this kata already has a dictionary typed out for you.

  Examples:
    nato('hi') // --> 'Hotel India'
    nato('abc') // --> 'Alpha Bravo Charlie'

  Kata Link:
    https://www.codewars.com/kata/nato-phonetic-alphabet

  Discuss Link:
    https://www.codewars.com/kata/nato-phonetic-alphabet/discuss

  Solutions Link:
    https://www.codewars.com/kata/nato-phonetic-alphabet/solutions
*/

// Long Solution
const nato = string => {
  const letters = {
    A: 'Alpha',
    B: 'Bravo',
    C: 'Charlie',
    D: 'Delta',
    E: 'Echo',
    F: 'Foxtrot',
    G: 'Golf',
    H: 'Hotel',
    I: 'India',
    J: 'Juliett',
    K: 'Kilo',
    L: 'Lima',
    M: 'Mike',
    N: 'November',
    O: 'Oscar',
    P: 'Papa',
    Q: 'Quebec',
    R: 'Romeo',
    S: 'Sierra',
    T: 'Tango',
    U: 'Uniform',
    V: 'Victor',
    W: 'Whiskey',
    X: 'X-ray',
    Y: 'Yankee',
    Z: 'Zulu',
  }

  return string
    .toUpperCase()
    .split('')
    .map(char => letters[char])
    .join(' ')
}

// Function Export
module.exports = nato
