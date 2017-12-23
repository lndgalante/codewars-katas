/*
  Title:
    Get the Middle Character

  Description:
    You are going to be given a word. Your job is to return the middle character of the word.
    If the word's length is odd, return the middle character.
    If the word's length is even, return the middle 2 characters.

    A word (string) of length 0 < str < 1000 (In javascript you may get slightly
    more than 1000 in some test cases due to an error in the test cases).
    You do not need to test for this. This is only here to tell you
    that you do not need to worry about your solution timing out.

    The middle character(s) of the word represented as a string.

  Examples:
    Kata.getMiddle("test") should return "es"

    Kata.getMiddle("testing") should return "t"

    Kata.getMiddle("middle") should return "dd"

    Kata.getMiddle("A") should return "A"

  Kata Link:
    https://www.codewars.com/kata/get-the-middle-character

  Discuss Link:
    https://www.codewars.com/kata/get-the-middle-character/discuss

  Solutions Link:
    https://www.codewars.com/kata/get-the-middle-character/solutions
*/

// Long Solution
function getMiddle(str) {
  const strArray = str.split('')
  const isLengthEven = str.length % 2 === 0

  if (isLengthEven) {
    const half = strArray.length / 2
    return `${strArray[half - 1]}${strArray[half]}`
  } else {
    const half = Math.floor(strArray.length / 2)
    return strArray[half]
  }
}

// Function Export
module.exports = getMiddle
