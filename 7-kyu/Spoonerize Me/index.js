/*
  Title:
    Spoonerize Me

  Description:
    A spoonerism is a spoken phrase in which the first letters of two of the words are swapped around, often with amusing results.

    In its most basic form a spoonerism is a two word phrase in which only the first letters of each word are swapped:
    "not picking" --> "pot nicking"

    Your task is to create a function that takes a string of two words, separated by a space: words and returns a spoonerism of those words in a string, as in the above example.

  Notes:
    All input strings will contain only two words. Spoonerisms can be more complex.
    For example, three-word phrases in which the first letters of the first and last words are swapped: "pack of lies" --> "lack of pies" or more than one letter from a word is swapped: "flat battery --> "bat flattery"
    You are NOT expected to account for these, or any other nuances involved in spoonerisms.

  Kata Link:
    https://www.codewars.com/kata/spoonerize-me

  Discuss Link:
    https://www.codewars.com/kata/spoonerize-me/discuss

  Solutions Link:
    https://www.codewars.com/kata/spoonerize-me/solutions
*/

// Long Solution
/*
const spoonerizeWord = (wordA, wordB) => `${wordB[0]}${wordA.slice(1)}`

const spoonerize = words => {
  const [firstWord, secondWord] = words.split(' ')
  const spoonerizedFirstWord = spoonerizeWord(firstWord, secondWord)
  const spoonerizedSecondWord = spoonerizeWord(secondWord, firstWord)

  return [spoonerizedFirstWord, spoonerizedSecondWord].join(' ')
}
*/

// Short Solution - https://regexr.com/48v33
const spoonerize = words => words.replace(/\b(\w)(.*)\b(\w)/g, '$3$2$1')

// Function Export
module.exports = spoonerize
