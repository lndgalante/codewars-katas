/*
  Title:
    Ordered Count of Characters

  Description:
    Count the number of occurrences of each character and return it as a list of tuples in order of appearance.

  Examples:
    ordered_count("abracadabra") == [('a', 5), ('b', 2), ('r', 2), ('c', 1), ('d', 1)]

  Kata Link:
    https://www.codewars.com/kata/ordered-count-of-characters

  Discuss Link:
    https://www.codewars.com/kata/ordered-count-of-characters/discuss

  Solutions Link:
    https://www.codewars.com/kata/ordered-count-of-characters/solutions
*/

// Long Solution
/*
const orderedCount = text => {
  const repetitions = [...text].reduce((result, char) => ({ ...result, [char]: (result[char] || 0) + 1 }), {})
  const letters = [...new Set([...text])]

  return letters.map(letter => [letter, repetitions[letter]])
}
*/

// Short Solution
const orderedCount = text => [...new Set(text)].map(letter => [letter, text.split(letter).length - 1])

// Function Export
module.exports = orderedCount
