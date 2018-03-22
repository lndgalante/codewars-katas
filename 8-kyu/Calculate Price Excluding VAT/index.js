/*
  Title:
    Calculate Price Excluding VAT

  Description:
    Write a function that calculates the original product price, without VAT.

  Examples:
    If a product price is 200.00 and VAT is 15%, then the final product price (with VAT) is: 200.00 + 15% = 230.00
    Thus, if your function receives 230.00 as input, it should return 200.00


  Notes:
    VAT is always 15% for the purposes of this Kata.
    Round the result to 2 decimal places.
    If null value given then return -1

  Kata Link:
    https://www.codewars.com/kata/calculate-price-excluding-vat

  Discuss Link:
    https://www.codewars.com/kata/calculate-price-excluding-vat/discuss

  Solutions Link:
    https://www.codewars.com/kata/calculate-price-excluding-vat/solutions
*/

// Long Solution
const excludingVatPrice = price =>
  price === null ? -1 : Number((price / 1.15).toFixed(2))

// Function Export
module.exports = excludingVatPrice
