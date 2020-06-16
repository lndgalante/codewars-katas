/*
  Title:
    Display Large Numbers

  Description:
    In some locales (like the US) large numbers are displayed with commas every 3 digits to help users understand the size of the number at a glance.
    You're going to write a function to format a number for display in that way.

  Examples:
    displayLargeNumber(1234); // "1,234"
    displayLargeNumber(1234567); // "1,234,567"It should also work for string inputs that contain numbers:
    displayLargeNumber("1234"); // "1,234"This exercise can be great practice for off-by-one errors. For the full benefit, try not to use the test suite too much. Think through your input and iteration carefully instead.

  Notes:
    Also, the best practice for this in real life would probably be to use toLocaleString. I can't stop you from "cheating", but the spirit of this task is to do the parsing yourself.

  Kata Link:
    https://www.codewars.com/kata/57f318ce828b3553b40013ea

  Discuss Link:
    https://www.codewars.com/kata/57f318ce828b3553b40013ea/discuss

  Solutions Link:
    https://www.codewars.com/kata/57f318ce828b3553b40013ea/solutions
*/

// Long Solution - https://regexr.com/56q7l
/*
const displayLargeNumber = (number) =>
  String(number)
    .match(/\d{1,3}(?=(\d{3})*$)/g)
    .join(',')
*/

// Short Solution - https://regexr.com/56q7o
const displayLargeNumber = (number) => String(number).replace(/\d(?=(\d{3})+$)/g, '$&,')

// Function Export
module.exports = displayLargeNumber
