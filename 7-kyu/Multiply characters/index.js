/*
  Title:
    Multiply characters

  Description:
    Here we have a function that help us spam our hearty laughter. But is not working! I need you to find out why...

  Examples:
    spam(1);  // hue
    spam(6);  // huehuehuehuehuehue
    spam(14); // huehuehuehuehuehuehuehuehuehuehuehuehuehue

  Kata Link:
    https://www.codewars.com/kata/multiply-characters

  Discuss Link:
    https://www.codewars.com/kata/multiply-characters/discuss

  Solutions Link:
    https://www.codewars.com/kata/multiply-characters/solutions
*/

// Long Solution
const spam = (number, string = 'hue') => string.repeat(number)

// Function Export
module.exports = spam
