/*
  Title:
    Ordering the words!

  Description:
    Given a string, you need to write a method that order every letter in this string in ascending order.

    Also, you should validate that the given string is not empty or null. If so, the method should return:

    "Invalid String!"

  Examples:
    orderWord("hello world") => " dehllloorw"
    orderWord("bobby") => "bbboy"
    order_word("") => "Invalid String!"

  Notes:
    • the given string can be lowercase and uppercase.
    • the string could include spaces or other special characters like '# ! or ,'

  Kata Link:
    https://www.codewars.com/kata/ordering-the-words

  Discuss Link:
    https://www.codewars.com/kata/ordering-the-words/discuss

  Solutions Link:
    https://www.codewars.com/kata/ordering-the-words/solutions
*/

// Long Solution
const orderWord = s =>
  s
    ? s
        .split('')
        .sort()
        .join('')
    : 'Invalid String!'

// Function Export
module.exports = orderWord
