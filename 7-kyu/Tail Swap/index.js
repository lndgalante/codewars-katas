/*
  Title:
    Tail Swap

  Description:
    You'll be given a list of two strings, and each will contain exactly one colon in the middle (but not at beginning or end).
    The length of the strings, before and after the colon, are random.

    Your job is to return a list of two strings (in the same order as the original list), but with the characters after each colon swapped.

  Examples:
    tailSwap(['abc:123', 'cde:456']) == ['abc:456', 'cde:123']
    tailSwap(['a:12345', '777:xyz']) == ['a:xyz', '777:12345']

  Kata Link:
    https://www.codewars.com/kata/tail-swap

  Discuss Link:
    https://www.codewars.com/kata/tail-swap/discuss

  Solutions Link:
    https://www.codewars.com/kata/tail-swap/solutions
*/

// Long Solution
/*
const tailSwap = arr => {
  const [firstStr, secondStr] = arr

  const [firstStrHalfOne, firstStrHalfTwo] = firstStr.split(':')
  const [secondStrHalfOne, secondStrHalfTwo] = secondStr.split(':')

  return [`${firstStrHalfOne}:${secondStrHalfTwo}`, `${secondStrHalfOne}:${firstStrHalfTwo}`]
}
*/

// Short Solution
const tailSwap = array =>
  String(array)
    .replace(/(.+:)(.+),(.+:)(.+)/, '$1$4,$3$2')
    .split(',')

// Function Export
module.exports = tailSwap
