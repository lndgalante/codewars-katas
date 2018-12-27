/*
  Title:
    Thinkful - String Drills: Repeater level 2

  Description:
    This challenge extends the previous repeater() challenge.
    Just like last time, your job is to write a function that accepts a string and a number as arguments.
    This time, however, you should format the string you return like this.

  Examples:
    >>> repeater('yo', 3)
    '"yo" repeated 3 times is: "yoyoyo"'
    >>> repeater('WuB', 6)
    '"WuB" repeated 6 times is: "WuBWuBWuBWuBWuBWuB"'

  Kata Link:
    https://www.codewars.com/kata/thinkful-string-drills-repeater-level-2

  Discuss Link:
    https://www.codewars.com/kata/thinkful-string-drills-repeater-level-2/discuss

  Solutions Link:
    https://www.codewars.com/kata/thinkful-string-drills-repeater-level-2/solutions
*/

// Long Solution
const repeater = (string, n) => `"${string}" repeated ${n} times is: "${string.repeat(n)}"`

// Function Export
module.exports = repeater
