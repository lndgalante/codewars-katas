/*
  Title:
    Grasshopper - Shopping list

  Description:
    You are in charge of ordering food for a party.
    You are going to need 4 sandwiches, 6 salads, 5 wraps, and 10 orders of french fries. The cost per item of food is:

    food	price
    sandwich	$8.00
    salad	$7.00
    wrap	$6.50
    french fries	$1.20
    Create 4 variables to store the quantity of each type of food with the following names:

    sandwiches
    salads
    wraps
    frenchFries
    Create a variable named totalPrice that finds the cost of all of the food.

  Kata Link:
    https://www.codewars.com/kata/grasshopper-shopping-list

  Discuss Link:
    https://www.codewars.com/kata/grasshopper-shopping-list/discuss

  Solutions Link:
    https://www.codewars.com/kata/grasshopper-shopping-list/solutions
*/

// Long Solution
/*
const sandwiches = 4
const salads = 6
const wraps = 5
const frenchFries = 10

const totalPrice = sandwiches + salads + wraps + frenchFries
*/

// Short Solution
const sandwiches = 4
const salads = 6
const wraps = 5
const frenchFries = 10

const orders = [
  { food: 'sandwiches', quantity: sandwiches, price: 8 },
  { food: 'salads', quantity: salads, price: 7 },
  { food: 'wraps', quantity: wraps, price: 6.5 },
  { food: 'french fries', quantity: frenchFries, price: 1.2 },
]

const totalPrice = orders.reduce(
  (total, { quantity, price }) => total + quantity * price,
  0
)

// Function Export
module.exports = { sandwiches, salads, wraps, frenchFries, totalPrice }
