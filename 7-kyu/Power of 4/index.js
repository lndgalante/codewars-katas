/*
  Title:
    Power of 4

  Description:
    Write a method that returns true if a given parameter is a power of 4, and false if it's not. If parameter is not an Integer (eg String, Array) method should return false as well.

    (In C# Integer means all integer Types like Int16,Int32,.....)

  Examples:
    powerOf4(1024) // returns true
    powerOf4(44) // returns false
    powerOf4("not a positive integer") // returns false

  Kata Link:
    https://www.codewars.com/kata/power-of-4

  Discuss Link:
    https://www.codewars.com/kata/power-of-4/discuss

  Solutions Link:
    https://www.codewars.com/kata/power-of-4/solutions
*/

// Long Solution
/*
const powerOf4 = n =>
  n > 1 && Array.from({ length: n + 1 }, (_, index) => 4 ** index).includes(n)
*/

// Short Solution
const powerOf4 = n =>
  n > 1 && Number.isInteger(n) && Number.isInteger(Math.log(n) / Math.log(4))

// Function Export
module.exports = powerOf4
