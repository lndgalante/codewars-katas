/*
  Title:
    Not all but sometimes all

  Description:
    Write function remove(str, what)
    that takes in a string str(text in Python) and an object/hash/dict/Dictionary what and returns a string with the chars removed in what.

  Examples:
    remove('this is a string',{'t':1, 'i':2}) === 'hs s a string'
    // remove from 'this is a string' the first 1 't' and the first 2 i's.
    remove('hello world',{'x':5, 'i':2}) === 'hello world'
    // there are no x's or i's, so nothing gets removed
    remove('apples and bananas',{'a':50, 'n':1}) === 'pples d bnns'
    // we don't have 50 a's, so just remove it till we hit end of string.

  Kata Link:
    https://www.codewars.com/kata/not-all-but-sometimes-all

  Discuss Link:
    https://www.codewars.com/kata/not-all-but-sometimes-all/discuss

  Solutions Link:
    https://www.codewars.com/kata/not-all-but-sometimes-all/solutions
*/

// Long Solution
/*
const remove = (str, what) => {
  const dictionary = { ...what }

  return [...str]
    .map(char => {
      if (!dictionary[char] || dictionary[char] < 0) return char
      dictionary[char]--
      return ''
    })
    .join('')
}
*/

// Short Solution
const remove = (string, what) => string.replace(/[a-z]/g, char => (what[char]-- > 0 ? '' : char))

// Function Export
module.exports = remove
