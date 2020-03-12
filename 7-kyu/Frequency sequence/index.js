/*
  Title:
    Frequency sequence

  Description:
    Return an output string that translates an input string s/$s by replacing each character in s/$s with a number representing the number of times that character occurs in s/$s and separating each number with the character(s) sep/$sep.

  Examples:
    freq_seq("hello world", "-"); // => "1-1-3-3-2-1-1-2-1-3-1"
    freq_seq("19999999", ":"); // => "1:7:7:7:7:7:7:7"
    freq_seq("^^^**$", "x"); // => "3x3x3x2x2x1"

  Kata Link:
    https://www.codewars.com/kata/frequency-sequence

  Discuss Link:
    https://www.codewars.com/kata/frequency-sequence/discuss

  Solutions Link:
    https://www.codewars.com/kata/frequency-sequence/solutions
*/

// Long Solution
/*
const totalRepetitions = (str, char) => str.split(char).length - 1

const freqSeq = (str, sep) => [...str].map(char => totalRepetitions(str, char)).join(sep)
*/

// Short Solution
const freqSeq = (string, sep) => [...string].map(char => string.split(char).length - 1).join(sep)

// Function Export
module.exports = freqSeq
