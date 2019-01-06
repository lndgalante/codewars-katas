/*
  Title:
    Thinkful - String Drills: Poem formatter

  Description:
    You have a collection of lovely poems. Unfortuantely they aren't formatted very well. They're all on one line, like this:
    Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex. Complex is better than complicated.

    What you want is to present each sentence on a new line, so that it looks like this:

    Beautiful is better than ugly.
    Explicit is better than implicit.
    Simple is better than complex.
    Complex is better than complicated.

    Write a function, format_poem() that takes a string like the one line example as an argument and returns a new string that is formatted across multiple lines with each new sentence starting on a new line when you print it out.
    Try to solve this challenge with the str.split() and the str.join() string methods.
    Every sentence will end with a period, and every new sentence will have one space before the previous period. Be careful about trailing whitespace in your solution.

  Kata Link:
    https://www.codewars.com/kata/thinkful-string-drills-poem-formatter

  Discuss Link:
    https://www.codewars.com/kata/thinkful-string-drills-poem-formatter/discuss

  Solutions Link:
    https://www.codewars.com/kata/thinkful-string-drills-poem-formatter/solutions
*/

// Long Solution
/*
const formatPoem = poem => poem.split('. ').join('.\n')
*/

// Short Solution
const formatPoem = poem => poem.replace(/\.\s/g, '.\n')

// Function Export
module.exports = formatPoem
