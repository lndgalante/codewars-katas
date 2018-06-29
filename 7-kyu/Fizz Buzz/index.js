/*
  Title:
    Fizz Buzz

  Description:
    Return an array containing the numbers from 1 to N, where N is the parametered value.
    N will never be less than 1 (in C#, N might be less then 1).

    C# ONLY: If N is smaller then or equal to 0, throw an ArgumentOutOfRangeException!
    Replace certain values however if any of the following conditions are met:

    If the value is a multiple of 3: use the value 'Fizz' instead
    If the value is a multiple of 5: use the value 'Buzz' instead
    If the value is a multiple of 3 & 5: use the value 'FizzBuzz' instead

  Examples:
    string[] result = FizzBuzz.GetFizzBuzzArray(3); // => [ "1", "2", "Fizz" ]

  Kata Link:
    https://www.codewars.com/kata/fizz-buzz

  Discuss Link:
    https://www.codewars.com/kata/fizz-buzz/discuss

  Solutions Link:
    https://www.codewars.com/kata/fizz-buzz/solutions
*/

// Long Solution
const fizzbuzz = n =>
  Array.from({ length: n }, (_, index) => {
    const value = index + 1
    return value % 15 === 0
      ? 'FizzBuzz'
      : value % 3 === 0
        ? 'Fizz'
        : value % 5 === 0
          ? 'Buzz'
          : value
  })

// Function Export
module.exports = fizzbuzz
