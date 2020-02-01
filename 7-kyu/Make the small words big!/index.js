/*
  Title:
    Make the small words big!

  Description:
    Life isn't always easy as a small word amongst big words.
    If only they had a code warrior to help them out...

    Your task is to make all words which are 3 characters or less into capitals.
    You should also remove any vowels from 'long' (4 characters or more) words.

    For example:
    "The quick brown fox jumps over the lazy dog"

    Should become:
    "THE qck brwn FOX jmps vr THE lzy DOG"

    For the purposes of this kata, mid-word punctuation counts towards the character limit of a word.
    e.g: "it's / I'm" should become: "t's / I'M"

  Kata Link:
    https://www.codewars.com/kata/57b4dd38d2a31c75f7000299

  Discuss Link:
    https://www.codewars.com/kata/57b4dd38d2a31c75f7000299/discuss

  Solutions Link:
    https://www.codewars.com/kata/57b4dd38d2a31c75f7000299/solutions
*/

// Long Solution
/*
const transformWord = (word) => (word.length <= 3 ? word.toUpperCase() : word.replace(/[aeiou]+/gi, ''))

const smallWordHelper = (sentence) =>
  sentence
    .split(' ')
    .map(transformWord)
    .join(' ');
*/

// Short Solution - RegExp https://regexr.com/4tdgd
const transformWord = (word) => (word.length <= 3 ? word.toUpperCase() : word.replace(/[aeiou]+/gi, ''))

const smallWordHelper = (sentence) => sentence.replace(/(\w+)/g, transformWord)

// Function Export
module.exports = smallWordHelper
