/*
  Title:
    Interactive Dictionary

  Description:
    In this kata, your job is to create a class Dictionary which you can add words to and their entries.

  Examples:
    >>> let d = new Dictionary();

    >>> d.newEntry("Apple", "A fruit that grows on trees");

    >>> console.log(d.look("Apple"));
    A fruit that grows on trees

    >>> console.log(d.look("Banana"));
    Can't find entry for Banana

  Kata Link:
    https://www.codewars.com/kata/interactive-dictionary

  Discuss Link:
    https://www.codewars.com/kata/interactive-dictionary/discuss

  Solutions Link:
    https://www.codewars.com/kata/interactive-dictionary/solutions
*/

// Long Solution
class Dictionary {
  constructor() {
    this.dictionary = new Map()
  }

  newEntry(key, value) {
    this.dictionary.set(key, value)
  }

  look(key) {
    return this.dictionary.has(key) ? this.dictionary.get(key) : `Can't find entry for ${key}`
  }
}

// Function Export
module.exports = Dictionary
