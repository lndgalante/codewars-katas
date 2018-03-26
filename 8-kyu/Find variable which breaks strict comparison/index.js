/*
  Title:
    Find variable which breaks strict comparison!

  Description:
    In JavaScript, there is a special case where strict comparison of the same variable returns false!
    Try to find out what must be done to get such result!

    var x = something;
    x === x // returns false!
    Write a function which will return value for which strict comparison will give false!

  Kata Link:
    https://www.codewars.com/kata/find-variable-which-breaks-strict-comparison

  Discuss Link:
    https://www.codewars.com/kata/find-variable-which-breaks-strict-comparison/discuss

  Solutions Link:
    https://www.codewars.com/kata/find-variable-which-breaks-strict-comparison/solutions
*/

// Long Solution
const findStrangeValue = () => NaN

// Function Export
module.exports = findStrangeValue
