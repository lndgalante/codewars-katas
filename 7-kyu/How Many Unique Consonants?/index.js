/*
  Title:
    How Many Unique Consonants?

  Description:
    Complete the function that counts the number of unique consonants in a string (made up of printable ascii characters).
    Consonants are letters used in English other than "a", "e", "i", "o", "u". We will count "y" as a consonant.

    Remember, your function needs to return the number of unique consonants - disregarding duplicates.
    For example, if the string passed into the function reads "add", the function should return 1 rather than 2, since "d" is a duplicate.

    Similarly, the function should also disregard duplicate consonants of differing cases.
    For example, "Dad" passed into the function should return 1 as "d" and "D" are duplicates.

  Examples:
    "add" ==> 1
    "Dad" ==> 1
    "aeiou" ==> 0
    "sillystring" ==> 7
    "abcdefghijklmnopqrstuvwxyz" ==> 21
    "Count my unique consonants!!" ==> 7

  Kata Link:
    https://www.codewars.com/kata/how-many-unique-consonants

  Discuss Link:
    https://www.codewars.com/kata/how-many-unique-consonants/discuss

  Solutions Link:
    https://www.codewars.com/kata/how-many-unique-consonants/solutions
*/

// Long Solution
/*
const countConsonants = str =>
  [...new Set(str.toLowerCase())].reduce((total, char) => (/(?=[a-z])[^aeiou]/g.test(char) ? total + 1 : total), 0)
*/

// Short Solution
const countConsonants = string => new Set(string.toLowerCase().replace(/[^a-z]|[aeiou]/g, '')).size

// Function Export
module.exports = countConsonants
