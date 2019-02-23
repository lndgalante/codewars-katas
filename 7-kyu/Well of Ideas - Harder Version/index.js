/*
  Title:
    Well of Ideas - Harder Version

  Description:
    For every good kata idea there seem to be quite a few bad ones!

    In this kata you need to check the provided 2 dimensional array (x) for good ideas 'good' and bad ideas 'bad'.
    If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'.
    If there are no good ideas, as is often the case, return 'Fail!'.

    The sub arrays may not be the same length.

    The solution should be case insensitive (ie good, GOOD and gOOd all count as a good idea). All inputs may not be strings.

  Kata Link:
    https://www.codewars.com/kata/well-of-ideas-harder-version

  Discuss Link:
    https://www.codewars.com/kata/well-of-ideas-harder-version/discuss

  Solutions Link:
    https://www.codewars.com/kata/well-of-ideas-harder-version/solutions
*/

// Long Solution
/*
const well = x => {
  const totalGoodIdeas = x.reduce((total, ideas) => total + (ideas.join('').match(/good/gi) || []).length, 0)

  if (totalGoodIdeas > 2) return 'I smell a series!'
  if (totalGoodIdeas === 0) return 'Fail!'
  return 'Publish!'
}
*/

// Short Solution
const well = x => {
  const totalGoodIdeas = (x.join('').match(/good/gi) || []).length

  if (totalGoodIdeas > 2) return 'I smell a series!'
  if (totalGoodIdeas === 0) return 'Fail!'
  return 'Publish!'
}

// Function Export
module.exports = well
