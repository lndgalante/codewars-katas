/*
  Title:

  Description:
    Write a method that will search an array of strings for all strings that contain another string, ignoring capitalization.
    Then return an array of the found strings.

    The method takes two parameters, the query string and the array of strings to search, and returns an array.

    If the string isn't contained in any of the strings in the array, the method returns an array containing a single string: "Empty" (or Nothing in Haskell, or "None" in Python)

  Examples:
    If the string to search for is "me", and the array to search is ["home", "milk", "Mercury", "fish"], the method should return ["home", "Mercury"].

  Notes:

  Kata Link:
    https://www.codewars.com/kata/partial-word-searching

  Discuss Link:
    https://www.codewars.com/kata/partial-word-searching/discuss

  Solutions Link:
    https://www.codewars.com/kata/partial-word-searching/solutions
*/

// Long Solution
/*
const wordSearch = (query, seq) => {
  const wordsFound = seq.filter(str =>
    str.toLowerCase().includes(query.toLowerCase())
  )
  return wordsFound.length ? wordsFound : ['Empty']
}
*/

// Short Solution
const wordSearch = (query, seq) => {
  const expression = new RegExp(query, 'i')
  const wordsFound = seq.filter(str => expression.test(str))

  return wordsFound.length > 0 ? wordsFound : ['Empty']
}

// Function Export
module.exports = wordSearch
