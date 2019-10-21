/*
  Title:
    Reverse and Invert

  Description:
    Reverse and invert all integer values in a given list.

  Examples:
    reverseInvert([1,12,'a',3.4,87,99.9,-42,50,5.6]) = [-1,-21,-78,24,-5]

  Notes:
    Ignore all other types than integer.

  Kata Link:
    https://www.codewars.com/kata/reverse-and-invert

  Discuss Link:
    https://www.codewars.com/kata/reverse-and-invert/discuss

  Solutions Link:
    https://www.codewars.com/kata/reverse-and-invert/solutions
*/

// Long Solution
/*
const reverseNumber = num =>
  Number(
    String(num)
      .replace(/-/g, '')
      .split('')
      .reverse()
      .join('')
  )

const reverseInvert = array => {
  return array.filter(Number.isInteger).map(number => {
    const reversedNumber = reverseNumber(number)

    const numberSign = Math.sign(number)
    const isPositive = [-0, 0, 1].includes(numberSign)

    return isPositive ? -reversedNumber : reversedNumber
  })
}
*/

// Short Solution
const reverseNumber = num => {
  return (
    -Math.sign(num) *
    parseInt(
      String(num)
        .split('')
        .reverse()
        .join(''),
      10
    )
  )
}

const reverseInvert = array => array.filter(Number.isInteger).map(reverseNumber)

// Function Export
module.exports = reverseInvert
