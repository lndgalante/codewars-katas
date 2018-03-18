/*
  Title:
    Well of Ideas - Easy Version

  Description:
    For every good kata idea there seem to be quite a few bad ones!

    In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'.
    If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'.
    If there are no good ideas, as is often the case, return 'Fail!'.

  Kata Link:
    https://www.codewars.com/kata/well-of-ideas-easy-version

  Discuss Link:
    https://www.codewars.com/kata/well-of-ideas-easy-version/discuss

  Solutions Link:
    https://www.codewars.com/kata/well-of-ideas-easy-version/solutions
*/

// Long Solution
const well = x => {
  const goodIdeas = x.filter(idea => idea === 'good').length

  if (goodIdeas > 2) return 'I smell a series!'
  if (goodIdeas > 0) return 'Publish!'
  return 'Fail!'
}

// Function Export
module.exports = well
