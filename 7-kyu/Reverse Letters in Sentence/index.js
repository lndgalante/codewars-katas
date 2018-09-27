/*
  Title:
    Reverse Letters in Sentence

  Description:
    Take a sentence (string) and reverse each word in the sentence.
    Do not reverse the order of the words, just the letters in each word.

    If there is punctuation, it should be interpreted as a regular character; no special rules.

    If there is spacing before/after the input string, leave them there.

    String will not be empty.

  Examples:
    "Hi mom" => "iH mom"
    " A fun little challenge! " => " A nuf elttil !egnellahc "

  Kata Link:
    https://www.codewars.com/kata/reverse-letters-in-sentence

  Discuss Link:
    https://www.codewars.com/kata/reverse-letters-in-sentence/discuss

  Solutions Link:
    https://www.codewars.com/kata/reverse-letters-in-sentence/solutions
*/

// Long Solution
/*
const reverser = sentence =>
  sentence
    .split(' ')
    .map(word =>
      word
        .split('')
        .reverse()
        .join('')
    )
    .join(' ')
*/

// Short Solution - RegExp https://regexr.com/408cr
const reverser = s => s.replace(/\S+/g, word => [...word].reverse().join(''))

// Function Export
module.exports = reverser
