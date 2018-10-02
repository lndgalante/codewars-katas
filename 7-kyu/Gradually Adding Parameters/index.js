/*
  Title:
    Gradually Adding Parameters

  Description:
    This kata is all about adding numbers.

    You will create a function named add. This function will return the sum of all the arguments. Sounds easy, doesn't it??

    Well here's the twist. The inputs will gradually increase with their index as parameter to the function.

      add(3,4,5);

      returns ( 3 * 1 ) + ( 4 * 2 ) + ( 5 * 3 ) = 26


    Remember the function will return 0 if no arguments are passed.

  Examples:
    add(); //=> 0
    add(1,2,3); //=> 14
    add(1,4,-5,5); //=> 14

  Kata Link:
    https://www.codewars.com/kata/gradually-adding-parameters

  Discuss Link:
    https://www.codewars.com/kata/gradually-adding-parameters/discuss

  Solutions Link:
    https://www.codewars.com/kata/gradually-adding-parameters/solutions
*/

// Long Solution
const add = (...args) =>
  args.reduce((total, number, index) => total + number * (index + 1), 0)

// Function Export
module.exports = add
