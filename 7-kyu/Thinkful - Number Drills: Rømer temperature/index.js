/*
  Title:
    Thinkful - Number Drills: Rømer temperature

  Description:
    You're writing an excruciatingly detailed alternate history novel set in a world where Daniel Gabriel Fahrenheit was never born.
    Since Fahrenheit never lived the world kept on using the Rømer scale, invented by fellow Dane Ole Rømer to this very day, skipping over the Fahrenheit and Celsius scales entirely.
    Your magnum opus contains several thousand references to temperature, but those temperatures are all currently in degrees Celsius.
    You don't want to convert everything by hand, so you've decided to write a function, celsius_to_romer() that takes a temperature in degrees Celsius and returns the equivalent temperature in degrees Rømer.

  Examples:
    celsius_to_romer(24) should return 20.1.

  Kata Link:
    https://www.codewars.com/kata/thinkful-number-drills-romer-temperature

  Discuss Link:
    https://www.codewars.com/kata/thinkful-number-drills-romer-temperature/discuss

  Solutions Link:
    https://www.codewars.com/kata/thinkful-number-drills-romer-temperature/solutions
*/

// Long Solution
const celsiusToRomer = temp => temp * 0.525 + 7.5

// Function Export
module.exports = celsiusToRomer
