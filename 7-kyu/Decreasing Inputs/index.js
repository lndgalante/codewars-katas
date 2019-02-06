/*
  Title:
    Decreasing Inputs

  Description:
    This kata is all about adding numbers.

    You will create a function named add. It will return the sum of all the arguments. Sounds easy, doesn't it?
    Well Here's the Twist. The inputs will gradually decrease with their index as parameter to the function.

    add(3,4,6); #returns ( 3 / 1 ) + ( 4 / 2 ) + ( 6 / 3 ) = 7

    add(3,4,6); #returns (3/1)+(4/2)+(6/3)=7

    add(3,4,6); #returns (3/1)+(4/2)+(6/3)=7

    Remember the function will return 0 if no arguments are passed and it must round the result if sum is a float.

  Examples:
    add(); //=> 0
    add(1,2,3); //=> 3
    add(1,4,-6,20); //=> 6

  Kata Link:
    https://www.codewars.com/kata/decreasing-inputs

  Discuss Link:
    https://www.codewars.com/kata/decreasing-inputs/discuss

  Solutions Link:
    https://www.codewars.com/kata/decreasing-inputs/solutions
*/

// Long Solution
const add = (...numbers) => Math.round(numbers.reduce((total, number, index) => total + number / (index + 1), 0))

// Function Export
module.exports = add
