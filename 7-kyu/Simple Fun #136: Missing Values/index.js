/*
  Title:
    Simple Fun #136: Missing Values

  Description:
    You are given an array of positive ints where every element appears three times,
    except one that appears only once (let's call it x) and one that appears only twice (let's call it y).
    Your task is to find x * x * y.

    Input/Output
      [input] integer array arr
      an array contains positive integers.

      [output] an integer
      The value of x * x * y

  Examples:
     For arr=[1, 1, 1, 2, 2, 3], the result should be 18
     3 x 3 x 2 = 18

     For arr=[6, 5, 4, 100, 6, 5, 4, 100, 6, 5, 4, 200], the result should be 4000000
     200 x 200 x 100 = 4000000

  Kata Link:
    https://www.codewars.com/kata/58a66c208b88b2de660000c3

  Discuss Link:
    https://www.codewars.com/kata/58a66c208b88b2de660000c3/discuss

  Solutions Link:
    https://www.codewars.com/kata/58a66c208b88b2de660000c3/solutions
*/

// Long Solution
const missingValues = (arr) => {
  const repetitions = arr.reduce((acc, num) => ({ ...acc, [num]: (acc[num] || 0) + 1 }), {});

  const [x, y] = Object.entries(repetitions)
    .sort(([, repetitionA], [, repetitionB]) => repetitionA - repetitionB)
    .map(([value]) => value);

  return x ** 2 * y;
};

// Function Export
module.exports = missingValues;
