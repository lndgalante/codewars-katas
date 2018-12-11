/*
  Title:
    Scrolling Text

  Description:
    Let's create some scrolling text!

    Your task is to complete the function which takes a string, and returns an array with all possible rotations of the given string, in uppercase.

  Examples:
    scrollingText("codewars") should return:

    [ "CODEWARS",
      "ODEWARSC",
      "DEWARSCO",
      "EWARSCOD",
      "WARSCODE",
      "ARSCODEW"
      "RSCODEWA",
      "SCODEWAR" ]

  Kata Link:
    https://www.codewars.com/kata/scrolling-text

  Discuss Link:
    https://www.codewars.com/kata/scrolling-text/discuss

  Solutions Link:
    https://www.codewars.com/kata/scrolling-text/solutions
*/

// Long Solution
/*
const scrollingText = text => {
  let textRotated = text.toUpperCase()

  return Array.from({ length: text.length }, (_, index) => {
    if (index === 0) return textRotated

    textRotated = `${textRotated.slice(1)}${textRotated[0]}`
    return textRotated
  })
}
*/

// Short Solution
const scrollingText = text => {
  const textRotated = text.toUpperCase()
  return Array.from({ length: text.length }, (_, index) => textRotated.slice(index) + textRotated.slice(0, index))
}

// Function Export
module.exports = scrollingText
