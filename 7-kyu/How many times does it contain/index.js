/*
  Title:
    How many times does it contain?

  Description:
    Your task is to return how many times a string contains a given character.

    The function takes a string(inputS) as a paremeter and a char(charS) which is the character that you will have to find and count.

    For example, if you get an input string "Hello world" and the character to find is "o", return 2.

  Kata Link:
    https://www.codewars.com/kata/how-many-times-does-it-contain

  Discuss Link:
    https://www.codewars.com/kata/how-many-times-does-it-contain/discuss

  Solutions Link:
    https://www.codewars.com/kata/how-many-times-does-it-contain/solutions
*/

// Long Solution
/*
const stringCounter = (inputS, charS) =>
  (inputS.match(new RegExp(`[${charS}]`, 'g')) || []).length
*/

// Short Solution
const stringCounter = (inputS, charS) => inputS.split(charS).length - 1

// Function Export
module.exports = stringCounter
