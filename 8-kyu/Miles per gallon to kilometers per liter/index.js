/*
  Title:
    Miles per gallon to kilometers per liter

  Description:
    Sometimes, I want to quickly be able to convert miles per imperial gallon into kilometers per liter.

    Create an application that will display the number of kilometers per liter (output) based on the number of miles per imperial gallon (input).

    Make sure to round off the result to two decimal points.
    If the answer ends with a 0, it should be rounded off without the 0.
    So instead of 5.50, we should get 5.5.

    Some useful associations relevant to this kata:
      1 Imperial Gallon = 4.54609188 litres
      1 Mile = 1.609344 kilometres

  Kata Link:
    https://www.codewars.com/kata/miles-per-gallon-to-kilometers-per-liter

  Discuss Link:
    https://www.codewars.com/kata/miles-per-gallon-to-kilometers-per-liter/discuss

  Solutions Link:
    https://www.codewars.com/kata/miles-per-gallon-to-kilometers-per-liter/solutions
*/

// Long Solution
/*
function converter(mpg) {
  const galonInLiters = 4.54609188
  const mileInKilometers = 1.609344

  const conversion = mpg * mileInKilometers / galonInLiters
  const result = conversion.toFixed(2).split('')

  if (result[result.length - 1] === '0')
    return Number((mpg * mileInKilometers / galonInLiters).toFixed(1))

  return Number(result.join(''))
}
*/

// Short Solution
const converter = mpg => Number((mpg * 0.3540060435382138).toFixed(2))

// Function Export
module.exports = converter
