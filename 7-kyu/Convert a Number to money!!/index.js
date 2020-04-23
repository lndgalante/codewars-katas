/*
  Title:
    Convert a Number to money!!

  Description:
    Simplified number to money converter.

      - truncate to 2 decimal places
      - don't keep trailing zeros
      - input will be a positive number with at least two trailing digits

  Examples:
    2546.2562    -->  '2,546.25'
    1500.342626  -->  '1,500.34'
    100.2134     -->  '100.21'

  Kata Link:
    https://www.codewars.com/kata/54ad586282bc65b7ec000182

  Discuss Link:
    https://www.codewars.com/kata/54ad586282bc65b7ec000182/discuss

  Solutions Link:
    https://www.codewars.com/kata/54ad586282bc65b7ec000182/solutions
*/

// Long Solution
/*
const numberToMoney = (n) => {
  const [integer, decimals] = String(n).split('.')
  const parsedDecimals = decimals.slice(0, 2)
  const parsedNumber = Number(`${integer}.${parsedDecimals}`)

  const formatter = new Intl.NumberFormat('en-US')
  return formatter.format(parsedNumber)
}
*/

// Short Solution
const numberToMoney = (n) => new Intl.NumberFormat().format(Math.floor(n * 100) / 100)

// Function Export
module.exports = numberToMoney
