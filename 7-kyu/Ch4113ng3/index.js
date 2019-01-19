/*
  Title:
    Ch4113ng3

  Description:
    Make your strings more nerdy: Replace all 'a'/'A' with 4, 'e'/'E' with 3 and 'l' with 1

  Examples:
    e.g. "Fundamentals" --> "Fund4m3nt41s"

  Kata Link:
    https://www.codewars.com/kata/ch4113ng3

  Discuss Link:
    https://www.codewars.com/kata/ch4113ng3/discuss

  Solutions Link:
    https://www.codewars.com/kata/ch4113ng3/solutions
*/

// Long Solution
/*
const nerdify = (txt, nerdDictionary = { a: 4, e: 3, l: 1 }) =>
  [...txt]
    .map(char => {
      const parsedChar = char !== 'L' ? char.toLowerCase() : char
      return nerdDictionary[parsedChar] || char
    })
    .join('')
*/

// Short Solution
const nerdify = (txt, nerdDictionary = { a: 4, e: 3, l: 1 }) =>
  txt.replace(/[aelAE]/g, match => nerdDictionary[match.toLowerCase()])

// Function Export
module.exports = nerdify
