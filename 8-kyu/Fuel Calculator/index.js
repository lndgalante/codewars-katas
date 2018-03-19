/*
  Title:
    Fuel Calculator

  Description:
    In this kata you will have to write a function called fuelPrice (fuel_price in PHP, Python) that takes litres and pricePerLiter as arguments.
    Purchases of 2 or more litres get a discount of 5 cents per litre, purchases of 4 or more litres get a discount of 10 cents per litre, and so on every two litres, up to a maximum discount of 25 cents per litre.
    But total discount per liter cannot be more than 25 cents. round answer to 2 decimal places.
    Also you can guess that there will not be negative or non-numeric inputs.

  Kata Link:
    https://www.codewars.com/kata/fuel-calculator

  Discuss Link:
    https://www.codewars.com/kata/fuel-calculator/discuss

  Solutions Link:
    https://www.codewars.com/kata/fuel-calculator/solutions
*/

// Long Solution
/*
const fuelPrice = (litres, pricePerLiter) => {
  let discountCents = 0
  if (litres >= 2) discountCents = 0.5
  if (litres >= 4) discountCents = 0.1
  if (litres >= 6) discountCents = 0.15
  if (litres >= 8) discountCents = 0.2
  if (litres >= 10) discountCents = 0.25

  const totalPrice = litres * pricePerLiter - litres * discountCents
  return Number(totalPrice.toFixed(2))
}
*/

// Short Solution
const fuelPrice = (litres, pricePerLiter) => {
  let pricePerLiterWithDescount = pricePerLiter

  for (let i = 2; i <= 10; i += 2) {
    if (litres >= i) {
      pricePerLiterWithDescount -= 0.05
    }
  }

  return Number((litres * pricePerLiterWithDescount).toFixed(2))
}

// Function Export
module.exports = fuelPrice
