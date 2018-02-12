/*
  Title:
    Leonardo Dicaprio and Oscars

  Description:
    You have to write a function that describe Leo:

    def leo(oscar):
      pass

    if oscar was (integer) 88, you have to return "Leo finally won the oscar! Leo is happy".
    if oscar was 86, you have to return "Not even for Wolf of wallstreet?!"
    if it was not 88 or 86 (and below 88) you should return "When will you give Leo an Oscar?"
    if it was over 88 you should return "Leo got one already!"

  Kata Link:
    https://www.codewars.com/kata/leonardo-dicaprio-and-oscars

  Discuss Link:
    https://www.codewars.com/kata/leonardo-dicaprio-and-oscars/discuss

  Solutions Link:
    https://www.codewars.com/kata/leonardo-dicaprio-and-oscars/solutions
*/

// Long Solution
/*
function leo(oscar) {
  if (oscar === 88) return 'Leo finally won the oscar! Leo is happy'
  if (oscar === 86) return 'Not even for Wolf of wallstreet?!'
  if (oscar < 88) return 'When will you give Leo an Oscar?'
  if (oscar > 88) return 'Leo got one already!'
}
*/

// Short Solution
const leo = oscar =>
  oscar === 88
    ? 'Leo finally won the oscar! Leo is happy'
    : oscar === 86
      ? 'Not even for Wolf of wallstreet?!'
      : oscar < 88 ? 'When will you give Leo an Oscar?' : 'Leo got one already!'

// Function Export
module.exports = leo
