/*
  Title:
    Dictionary from two lists

  Description:
    There are two lists of different length.
    The first one consists of keys, the second one consists of values.
    Write a function createDict(keys, values) that returns a dictionary created from keys and values.
    If there are not enough values, the rest of keys should have a None (JS null)value.
    If there not enough keys, just ignore the rest of values.

  Examples:
    Example 1
      keys = ['a', 'b', 'c', 'd']
      values = [1, 2, 3]
      createDict(keys, values) // returns {'a': 1, 'b': 2, 'c': 3, 'd': null}

    Example 2
      keys = ['a', 'b', 'c']
      values = [1, 2, 3, 4]
      createDict(keys, values) // returns {'a': 1, 'b': 2, 'c': 3}

  Kata Link:
    https://www.codewars.com/kata/dictionary-from-two-lists

  Discuss Link:
    https://www.codewars.com/kata/dictionary-from-two-lists/discuss

  Solutions Link:
    https://www.codewars.com/kata/dictionary-from-two-lists/solutions
*/

// Long Solution
const createDict = (keys, values) =>
  keys.reduce((dictionary, key, index) => {
    dictionary[key] = index < values.length ? values[index] : null
    return dictionary
  }, {})

// Function Export
module.exports = createDict
