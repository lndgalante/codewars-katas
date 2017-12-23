/*
  Title:
    Which are in?

  Description:
      Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

  Examples:
    # Example 1:
    a1 = ["arp", "live", "strong"]
    a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
    returns ["arp", "live", "strong"]

    # Example 2:
    a1 = ["tarp", "mice", "bull"]
    a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
    returns []

  Notes:
    Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.

    In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.

    Beware: r must be without duplicates.

  Kata Link:
    https://www.codewars.com/kata/which-are-in

  Discuss Link:
    https://www.codewars.com/kata/which-are-in/discuss

  Solutions Link:
    https://www.codewars.com/kata/which-are-in/solutions
*/

// Long Solution
function inArray(array1, array2) {
  return array1
    .filter(word1 => array2.some(word2 => word2.includes(word1)))
    .sort()
}

// Function Export
module.exports = inArray
