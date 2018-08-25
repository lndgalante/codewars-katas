/*
  Title:
    Folding your way to the moon

  Description:
    Have you heard about the myth that if you fold a paper enough times, you can reach the moon with it?
    Sure you do, but exactly how many? Maybe it's time to write a program to figure it out.

    You know that a piece of paper has a thickness of 0.0001m.
    Given distance in units of meters, calculate how many times you have to fold the paper to make the paper reach this distance.
    (If you're not familiar with the concept of folding a paper: Each fold doubles its total thickness.)

    Note: Of course you can't do half a fold. You should know what this means ;P

    Also, if somebody is giving you a non-positive distance, it's clearly bogus and you should yell at them by returning null (or whatever equivalent in your language. In Shell please return None).

  Kata Link:
    https://www.codewars.com/kata/folding-your-way-to-the-moon

  Discuss Link:
    https://www.codewars.com/kata/folding-your-way-to-the-moon/discuss

  Solutions Link:
    https://www.codewars.com/kata/folding-your-way-to-the-moon/solutions
*/

// Long Solution
/*
const foldTo = distance => {
  if (distance <= 0) return null

  let counter = 0
  for (var i = 0.0001; i < distance; i *= 2) counter += 1

  return counter
}
*/

// Short Solution
const foldTo = (distance, width = 1e4) =>
  distance <= 0 ? null : Math.max(0, Math.ceil(Math.log2(width * distance)))

// Function Export
module.exports = foldTo
