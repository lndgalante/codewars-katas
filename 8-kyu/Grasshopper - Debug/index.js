/*
  Title:
    Grasshopper - Debug

  Description:
    Your friend is traveling abroad to the United States so he wrote a program to convert fahrenheit to celsius.
    Unfortunately his code has some bugs.

    Find the errors in the code to get the celsius converter working properly.

    To convert fahrenheit to celsius:

    celsius = (fahrenheit - 32) * (5/9)
    Remember that typically temperatures in the current weather conditions are given in whole numbers.
    It is possible for temperature sensors to report temperatures with a higher accuracy such as to the nearest tenth.
    Instrument error though makes this sort of accuracy unreliable for many types of temperature measuring sensors.

  Kata Link:
    https://www.codewars.com/kata/grasshopper-debug

  Discuss Link:
    https://www.codewars.com/kata/grasshopper-debug/discuss

  Solutions Link:
    https://www.codewars.com/kata/grasshopper-debug/solutions
*/

// Long Solution
const convertToCelsius = temperature => (temperature - 32) * (5 / 9)

function weatherInfo(temp) {
  const celsius = convertToCelsius(temp)

  return celsius < 0
    ? `${celsius} is freezing temperature`
    : `${celsius} is above freezing temperature`
}

// Function Export
module.exports = weatherInfo
