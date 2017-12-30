/*
  Title:
    Sum Arrays

  Description:
    Write a method sum (sum_array in python, SumArray in C#) that takes an array
    of numbers and returns the sum of the numbers.
    These may be integers or decimals for Ruby andany instance of Num for Haskell.
    The numbers can also be negative.
    If the array does not contain any numbers then you should return 0.

  Examples:
    numbers = [1, 5.2, 4, 0, -1]
    puts sum(numbers)
    9.2

  Notes:
    * You can assume that you are only given numbers.
    * You cannot assume the size of the array.
    * You can assume that you do get an array and if the array is empty return 0.

  Kata Link:
    https://www.codewars.com/kata/sum-arrays

  Discuss Link:
    https://www.codewars.com/kata/sum-arrays/discuss

  Solutions Link:
    https://www.codewars.com/kata/sum-arrays/solutions
*/

// Short Solution
const sum = numbers => numbers.reduce((total, number) => total + number, 0)

// Function Export
module.exports = sum
