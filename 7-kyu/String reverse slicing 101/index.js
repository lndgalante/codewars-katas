/*
  Title:
    String reverse slicing 101

  Description:
    You'll be given a string of characters as an input. Complete the function that returns a list of strings:
    (a) in the reverse order of the original string, and
    (b) with each successive string starting one character further in from the end of the original string.
    Assume the original string is at least 3 characters long.  Try to do this using slices and avoid converting the string to a list.

  Examples:
    '123'   ==>  ['321', '21', '1']
    'abcde' ==>  ['edcba', 'dcba', 'cba', 'ba', 'a']

  Kata Link:
    https://www.codewars.com/kata/string-reverse-slicing-101

  Discuss Link:
    https://www.codewars.com/kata/string-reverse-slicing-101/discuss

  Solutions Link:
    https://www.codewars.com/kata/string-reverse-slicing-101/solutions
*/

// Long Solution
const reverseSlice = string => {
  const reversedString = [...string].reverse().join('')
  return Array.from({ length: string.length }, (_, index) => reversedString.slice(index))
}

// Function Export
module.exports = reverseSlice
