/*
  Title:
    Do you speak retsec?

  Description:
    You and your friends want to play undercover agents. In order to exchange your secret messages,
    you've come up with the following system: you take the word, cut it in half,
    and place the first half behind the latter.
    If the word has an uneven number of characters, you leave the middle at its previous place:

    retsec examples: http://i.imgur.com/Ozy6p09.png

    That way, you'll be able to exchange your messages in private.

    Task
    You're given a single word. Your task is to swap the halves.
    If the word has an uneven length, leave the character in the middle at that position and swap the chunks around it.

  Examples:
    reverseByCenter("secret")  == "retsec" // no center character
    reverseByCenter("agent")   == "nteag"  // center character is "e"

  Notes:
    Don't use this to actually exchange messages in private.

  Kata Link:
    https://www.codewars.com/kata/do-you-speak-retsec

  Discuss Link:
    https://www.codewars.com/kata/do-you-speak-retsec/discuss

  Solutions Link:
    https://www.codewars.com/kata/do-you-speak-retsec/solutions
*/

// Long Solution
/*
const reverseByCenter = s => {
  const halfLength = Math.floor(s.length / 2)
  const firstHalf = s.slice(0, halfLength)
  const secondHalf = s.slice(Math.ceil(s.length / 2))

  if (s.length % 2 !== 0) return `${secondHalf}${s[halfLength]}${firstHalf}`

  return `${secondHalf}${firstHalf}`
}
*/

// Short Solution
const reverseByCenter = s => {
  const half = Math.floor(s.length / 2)
  return `${s.slice(-half)}${s.slice(half, -half)}${s.slice(0, half)}`
}

// Function Export
module.exports = reverseByCenter
