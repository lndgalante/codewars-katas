/*
  Title:
    KISS - Keep It Simple Stupid

  Description:
    KISS stands for Keep It Simple Stupid.
    It is a design principle for keeping things simple rather than complex.
    You are the boss of Joe.
    Joe is submitting words to you to publish to a blog. He likes to complicate things.
    Define a function that determines if Joe's work is simple or complex.
    Input will be non emtpy strings with no punctuation.
    It is simple if:
    the length of each word does not exceed the amount of words in the string
    (See example test cases)
    Otherwise it is complex.
    If complex:
    return "Keep It Simple Stupid"

    or if it was kept simple:
    return "Good work Joe!"

  Notes:
    Note: Random test are random and nonsensical. Here is a silly example of a random test:
    "jump always mostly is touchy dancing choice is pineapples mostly"

  Kata Link:
    https://www.codewars.com/kata/kiss-keep-it-simple-stupid

  Discuss Link:
    https://www.codewars.com/kata/kiss-keep-it-simple-stupid/discuss

  Solutions Link:
    https://www.codewars.com/kata/kiss-keep-it-simple-stupid/solutions
*/

// Long Solution
/*
const isKiss = words => {
  const wordsArr = words.split(' ')
  const isSimple = wordsArr.every(word => word.length <= wordsArr.length)

  return isSimple ? 'Good work Joe!' : 'Keep It Simple Stupid'
}
*/

// Short Solution
const isKiss = words =>
  words.split(' ').every((word, _, arr) => word.length <= arr.length) ? 'Good work Joe!' : 'Keep It Simple Stupid'

// Function Export
module.exports = isKiss
