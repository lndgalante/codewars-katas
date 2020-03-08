/*
  Title:
    String Merge!

  Description:
    Given two words and a letter, return a single word that's a combination of both words, merged at the point where the given letter first appears in each word.
    The returned word should have the beginning of the first word and the ending of the second, with the dividing letter in the middle.
    You can assume both words will contain the dividing letter.

  Examples:
    StringMerge("hello", "world", "l")       ==>  "held"
    StringMerge("coding", "anywhere", "n")   ==>  "codinywhere"
    StringMerge("jason", "samson", "s")      ==>  "jasamson"
    StringMerge("wonderful", "people", "e")  ==>  "wondeople"

    string_merge("hello", "world", "l")      ==>  "held"
    string_merge("coding", "anywhere", "n")  ==>  "codinywhere"
    string_merge("jason", "samson", "s")     ==>  "jasamson"
    string_merge("wonderful", "people", "e") ==>  "wondeople"

    stringMerge("hello", "world", "l")      ==>  "held"
    stringMerge("coding", "anywhere", "n")  ==>  "codinywhere"
    stringMerge("jason", "samson", "s")     ==>  "jasamson"
    stringMerge("wonderful", "people", "e") ==>  "wondeople"

    stringMerge("hello", "world", "l");      ==>  "held"
    stringMerge("coding", "anywhere", "n");  ==>  "codinywhere"
    stringMerge("jason", "samson", "s");     ==>  "jasamson"
    stringMerge("wonderful", "people", "e"); ==>  "wondeople"

  Kata Link:
    https://www.codewars.com/kata/string-merge

  Discuss Link:
    https://www.codewars.com/kata/string-merge/discuss

  Solutions Link:
    https://www.codewars.com/kata/string-merge/solutions
*/

// Long Solution
/*
const cutFirstHalf = (str, char) => str.slice(0, [...str].indexOf(char))

const cutSecondHalf = (str, char) => str.slice([...str].indexOf(char) + 1)

const stringMerge = (string1, string2, letter) =>
  `${cutFirstHalf(string1, letter)}${letter}${cutSecondHalf(string2, letter)}`
*/

// Short Solution
const stringMerge = (string1, string2, letter) => string1.split(letter, 1) + string2.slice(string2.indexOf(letter))

// Function Export
module.exports = stringMerge
