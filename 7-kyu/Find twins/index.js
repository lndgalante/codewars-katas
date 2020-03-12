/*
  Title:
    Find twins

  Description:
    Agent 47, you have a new task! Among citizens of the city X are hidden 2 dangerous criminal twins.
    You task is to identify them and eliminate!

    Given an array of integers, your task is to find two same numbers and return one of them, for example in array [2, 3, 6, 34, 7, 8, 2] answer is 2.

    If there are no twins in the city - return None or the equivilent in the langauge that you are using.

  Kata Link:
    https://www.codewars.com/kata/find-twins

  Discuss Link:
    https://www.codewars.com/kata/find-twins/discuss

  Solutions Link:
    https://www.codewars.com/kata/find-twins/solutions
*/

// Long Solution
const elimination = array =>
  array.find(number => array.indexOf(number) !== array.lastIndexOf(number)) || null

// Function Export
module.exports = elimination
