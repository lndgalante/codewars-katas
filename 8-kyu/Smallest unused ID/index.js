/*
  Title:
    Smallest unused ID

  Description:
    Hey awesome programmer!

    You've got much data to manage and of course you use zero-based and non-negative ID's to make each data item unique!

    Therefore you need a method, which returns the smallest unused ID for your next new data item...

    Note: The given array of used IDs may be unsorted.
    For test reasons there may be duplicate IDs, but you don't have to find or remove them!

    Go on and code some pure awesomeness!

  Kata Link:
    https://www.codewars.com/kata/smallest-unused-id

  Discuss Link:
    https://www.codewars.com/kata/smallest-unused-id/discuss

  Solutions Link:
    https://www.codewars.com/kata/smallest-unused-id/solutions
*/

// Long Solution
/*
const nextId = ids =>
  Math.min(
    ...ids
      .sort((a, b) => a - b)
      .filter((number, index) => number + 1 !== ids[index + 1])
  ) + 1
  */

// Short Solution
const nextId = ids => {
  const used = new Set(ids)

  for (let i = 0; i <= ids.length; i++) {
    if (!used.has(i)) return i
  }
}

// Function Export
module.exports = nextId
