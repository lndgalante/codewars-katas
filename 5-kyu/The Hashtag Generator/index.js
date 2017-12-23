/*
  Title:
    The Hashtag Generator

  Description:
    The marketing team are spending way too much time typing in hashtags.
    Let's help them with out own Hashtag Generator!

    Here's the deal:
    * If the final result is longer than 140 chars it must return false.
    * If the input is a empty string it must return false.
    * It must start with a hashtag (#).
    * All words must have their first letter capitalized.

  Examples:
    " Hello there thanks for trying my Kata" => "#HelloThereThanksForTryingMyKata"
    " Hello World " => "#HelloWorld"

  Kata Link:
    https://www.codewars.com/kata/the-hashtag-generator

  Discuss Link:
    https://www.codewars.com/kata/the-hashtag-generator/discuss

  Solutions Link:
    https://www.codewars.com/kata/the-hashtag-generator/solutions
*/

function generateHashtag(str) {
  if (str === '') return false

  const stringWithCamelCase = str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('')

  const stringWithHashtag = `#${stringWithCamelCase.trim()}`

  return stringWithHashtag.length > 140 ? false : stringWithHashtag
}

// Function Export
module.exports = generateHashtag
