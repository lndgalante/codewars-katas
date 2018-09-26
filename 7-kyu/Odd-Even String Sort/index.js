/*
  Title:
    Odd-Even String Sort

  Description:
    Given a string S.
    You have to return another string such that even-indexed and odd-indexed characters of S are grouped and groups are space-separated (see sample below)

  Examples:
    input: 'CodeWars' output 'CdWr oeas'

    S[0] = 'C'
    S[1] = 'o'
    S[2] = 'd'
    S[3] = 'e'
    S[4] = 'W'
    S[5] = 'a'
    S[6] = 'r'
    S[7] = 's'

    Even indices 0, 2, 4, 6, so we have 'CdWr' as the first group
    odd ones are 1, 3, 5, 7, so the second group is 'oeas'
    And the final string to return is 'Cdwr oeas'

  Notes:
    0 is considered to be an even index.
    All input strings are valid with no spaces.

  Kata Link:
    https://www.codewars.com/kata/{kata-name}

  Discuss Link:
    https://www.codewars.com/kata/{kata-name}/discuss

  Solutions Link:
    https://www.codewars.com/kata/{kata-name}/solutions
*/

// Long Solution
/*
const sortMyString = s => {
  const charArray = s.split('')
  const evenLetters = charArray.filter((_, index) => index % 2 === 0).join('')
  const oddLetters = charArray.filter((_, index) => index % 2 !== 0).join('')

  return `${evenLetters} ${oddLetters}`
}
*/

// Short Solution
const sortMyString = s =>
  s
    .split('')
    .reduce(
      (result, char, index) => {
        result[index % 2] += char
        return result
      },
      ['', '']
    )
    .join(' ')

// Function Export
module.exports = sortMyString
