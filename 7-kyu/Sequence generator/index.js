/*
  Title:
    Sequence generator

  Description:
    Implement function sequence, which returns new n-size Array filled according to pattern.

    pattern may be:
    * a function that takes two: (element, index), one: (element) or any arguments (similar to map function),
     then filled running this function, in other words: function describes sequence

    * number, string or any other object, then filled by copying, this object n-times

  Examples:
    sequence(3, 4); // [4, 4, 4]
    sequence(5, []); // [[], [], [], [], []]
    sequence(2, "s"); // ["s", "s"]
    sequence(5, (x, idx) => idx%2) // [0, 1, 0, 1, 0];
    sequence(10, (x, idx) => idx+1) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  Notes:
    Sequences are great to work with functional methods like map, reduce, forEach, every or any. For example:

    // sum of numbers 1-10
    let sum = sequence(10, (x, idx) => idx+1).reduce((sum, num) => sum + num);

    Be careful with long sequances. They are just arrays, every element is created when function is called.

  Kata Link:
    https://www.codewars.com/kata/sequence-generator-1

  Discuss Link:
    https://www.codewars.com/kata/sequence-generator-1/discuss

  Solutions Link:
    https://www.codewars.com/kata/sequence-generator-1/solutions
*/

// Long Solution
/*
const sequence = (n, pattern) => {
  const type = typeof pattern
  const array = Array.from({ length: n })

  if (type === 'function') return array.map(pattern)
  return array.fill(pattern)
}
*/

// Short Solution
const sequence = (n, pattern) =>
  [...new Array(n)].map(typeof pattern === 'function' ? pattern : () => pattern)

// Function Export
module.exports = sequence
