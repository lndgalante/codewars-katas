/*
  Title:
    String matchup

  Description:
    Given two arrays of strings, return the number of times each string of the second array appears in the first array.

  Examples:
    array1 = ['abc', 'abc', 'xyz', 'cde', 'uvw']
    array2 = ['abc', 'cde', 'uap']

    How many times do the elements in array2 appear in array1?
      'abc' appears twice in the first array (2)
      'cde' appears only once (1)
      'uap' does not appear in the first array (0)

    Therefore, solve(array1, array2) = [2, 1, 0]

  Kata Link:
    https://www.codewars.com/kata/string-matchup

  Discuss Link:
    https://www.codewars.com/kata/string-matchup/discuss

  Solutions Link:
    https://www.codewars.com/kata/string-matchup/solutions
*/

// Long Solution
/*
const solve = (a, b) =>
  b.reduce((repetitions, string, index) => {
    const totalRepetitions = a.reduce((total, stringToMatch) => (string === stringToMatch ? total + 1 : total), 0)
    repetitions[index] = totalRepetitions

    return repetitions
  }, Array.from({ length: b.length }, () => 0))
*/

// Short Solution
const solve = (a, b) => b.map(stringB => a.filter(stringA => stringA === stringB).length)

// Function Export
module.exports = solve
