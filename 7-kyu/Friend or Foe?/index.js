/*
  Title:
    Friend or Foe?

  Description:
    Make a program that filters a list of strings and returns a list with only your friends name in it.

    If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

  Examples:
    Input = ["Ryan", "Kieran", "Jason", "Yous"]
    Output = ["Ryan", "Yous"]

  Notes:
    Keep the original order of the names in the output.

  Kata Link:
    https://www.codewars.com/kata/friend-or-foe

  Discuss Link:
    https://www.codewars.com/kata/friend-or-foe/discuss

  Solutions Link:
    https://www.codewars.com/kata/friend-or-foe/solutions
*/

// Short Solution
const friend = friends => friends.filter(friend => friend.length === 4)

// Function Export
module.exports = friend
