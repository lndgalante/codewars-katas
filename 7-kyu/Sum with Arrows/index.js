/*
  Title:
    Sum with Arrows

  Description:
    Sum all the values in an array using Arrow style function.
    Your task is to complete the function in the string to Sum all the numbers in an array using the Arrow style function.

  Notes:
     Because eval hasnt caught up and cannot evaluate arrow style functions I have to do it manually.
     Your solution must contain the Arrow style function, the curly braces inside the reduce and the return statement because it must be manually converted to an old function style to test the validlity of the function itself.
     Your function will be returned to you when it is converted incase it fails (which is highly possible) if any issues occur please post in the discussion and provide your solution marked as spoiler, Thanks.

  Kata Link:
    https://www.codewars.com/kata/sum-with-arrows

  Discuss Link:
    https://www.codewars.com/kata/sum-with-arrows/discuss

  Solutions Link:
    https://www.codewars.com/kata/sum-with-arrows/solutions
*/

// Long Solution
/*
const Sum = 'sum = function(arr) { return arr.reduce((acc, number) => acc + number, 0) }'
*/

// Short Solution
const Sum = 'sum = (arr) => arr.reduce((acc, number) => acc + number, 0)'

// Function Export
module.exports = Sum
