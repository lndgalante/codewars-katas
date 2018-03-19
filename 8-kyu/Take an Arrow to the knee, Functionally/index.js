/*
  Title:
    Take an Arrow to the knee, Functionally

  Description:
    Arrow style Functions
    Come here to practice the Arrow style functions Not much else to say good luck!

    Details
    You will be given an array of numbers which can be used using the String.fromCharCode() (JS),
    Tools.FromCharCode() (C#) method to convert the number to a character.
    It is recommended to map over the array of numbers and convert each number to the corresponding ascii character.

  Examples:
    These are example of how to convert a number to an ascii Character:
    Javascript => String.fromCharCode(97) // a
    C# => Tools.FromCharCode(97) // a

  Kata Link:
    https://www.codewars.com/kata/{kata-name}

  Discuss Link:
    https://www.codewars.com/kata/{kata-name}/discuss

  Solutions Link:
    https://www.codewars.com/kata/{kata-name}/solutions
*/

// Long Solution
const arrowFunc = arr => arr.map(char => String.fromCharCode(char)).join('')

// Function Export
module.exports = arrowFunc
