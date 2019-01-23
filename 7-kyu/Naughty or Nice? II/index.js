/*
  Title:
    Naughty or Nice?

  Description:
    In this kata, you will write a function that receives an array of string and returns a string that is either 'naughty' or 'nice'.
    Strings that start with the letters b, f, or k are naughty.
    Strings that start with the letters g, s, or n are nice.
    Other strings are neither naughty nor nice.
    If there is an equal amount of bad and good actions, return 'naughty'

  Examples:
    bad_actions = ['broke someone\'s window', 'fought over a toaster', 'killed a bug']
    whatListAmIOn(bad_actions)
    #-> 'naughty'
    good_actions = ['got someone a new car', 'saved a man from drowning', 'never got into a fight']
    what_list_am_i_on(good_actions)
    #-> 'nice'
    actions = ['broke a vending machine', 'never got into a fight', 'tied someone\'s shoes']
    what_list_am_i_on(actions)
    #-> 'naughty'

  Kata Link:
    https://www.codewars.com/kata/naughty-or-nice-2

  Discuss Link:
    https://www.codewars.com/kata/naughty-or-nice-2/discuss

  Solutions Link:
    https://www.codewars.com/kata/naughty-or-nice-2/solutions
*/

// Long Solution
/*
const whatListAmIOn = actions => {
  const totalGoodActions = actions.reduce((total, action) => (/^[gsn]/g.test(action) ? total + 1 : total), 0)
  const totalBadActions = actions.reduce((total, action) => (/^[bfk]/g.test(action) ? total + 1 : total), 0)

  if (totalBadActions >= totalGoodActions) return 'naughty'
  return 'nice'
}
*/

// Short Solution
const whatListAmIOn = actions =>
  actions.reduce((total, action) => (/^[gsn]/g.test(action) ? total + 1 : total), 0) >
  actions.reduce((total, action) => (/^[bfk]/g.test(action) ? total + 1 : total), 0)
    ? 'nice'
    : 'naughty'

// Function Export
module.exports = whatListAmIOn
