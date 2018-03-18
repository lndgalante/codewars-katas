/*
  Title:
    What's up next?

  Description:
    Given a sequence of items and a specific item in that sequence, return the item immediately following the item specified.
    If the item occurs more than once in a sequence, return the item after the first occurence.
    This should work for a sequence of any type.

    When the item isn't present or nothing follows it, the function should return nil in Clojure and Elixir,Nothing in Haskell, undefined in JavaScript.

  Examples:
    nextItem([1, 2, 3, 4, 5, 6, 7], 3) # 4
    nextItem("testing", "t") # "e"

  Kata Link:
    https://www.codewars.com/kata/whats-up-next

  Discuss Link:
    https://www.codewars.com/kata/whats-up-next/discuss

  Solutions Link:
    https://www.codewars.com/kata/whats-up-next/solutions
*/

// Long Solution
const nextItem = (xs, item) => {
  let found = false
  let finalValue

  for (const i of xs) {
    if (found) {
      finalValue = i
      break
    }

    if (i === item) found = true
  }

  return finalValue
}

// Function Export
module.exports = nextItem
