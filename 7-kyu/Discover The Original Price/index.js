/*
  Title:
    Discover The Original Price

  Description:
    We need to write some code to return the original price of a product,
    the return type must be of type decimal and the number must be rounded to two decimal places.

    We will be given the sale price (discounted price), and the sale percentage,
    our job is to figure out the original price.

  Examples:
    Given an item at $75 sale price after applying a 25% discount,
    the function should return the original price of that item before applying the sale percentage,
    which is ($100.00) of course, rounded to two decimal places.

    DiscoverOriginalPrice(75, 25) => 100.00M where 75 is the sale price (discounted price),
    25 is the sale percentage and 100 is the original price

  Kata Link:
    https://www.codewars.com/kata/discover-the-original-price

  Discuss Link:
    https://www.codewars.com/kata/discover-the-original-price/discuss

  Solutions Link:
    https://www.codewars.com/kata/discover-the-original-price/solutions
*/

// Long Solution
const discoverOriginalPrice = (discountedPrice, salePercentage) =>
  Math.round((discountedPrice / (1 - salePercentage / 100)) * 100) / 100

// Function Export
module.exports = discoverOriginalPrice
