/*
  Title:
    Describe a list

  Description:
    Write function describeList which tells if the list is empty or contains only one element or more.

  Kata Link:
    https://www.codewars.com/kata/describe-a-list

  Discuss Link:
    https://www.codewars.com/kata/describe-a-list/discuss

  Solutions Link:
    https://www.codewars.com/kata/describe-a-list/solutions
*/

// Long Solution
/*
const describeList = (x, descriptions = { 0: 'empty', 1: 'singleton' }) => descriptions[x.length] || 'longer'
*/

// Short Solution
const describeList = x => ['empty', 'singleton'][x.length] || 'longer'

// Function Export
module.exports = describeList
