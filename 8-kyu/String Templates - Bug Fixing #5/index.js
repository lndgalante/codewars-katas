/*
  Title:
    String Templates - Bug Fixing #5

  Description:
    Oh no! Timmy hasn't followed instructions very carefully and forgot how to use the new String Template feature,
    Help Timmy with his string template so it works as he expects!

  Kata Link:
    https://www.codewars.com/kata/string-templates-bug-fixing-number-5

  Discuss Link:
    https://www.codewars.com/kata/string-templates-bug-fixing-number-5/discuss

  Solutions Link:
    https://www.codewars.com/kata/string-templates-bug-fixing-number-5/solutions
*/

// Long Solution
const buildString = (...template) => `I like ${template.join(', ')}!`

// Function Export
module.exports = buildString
