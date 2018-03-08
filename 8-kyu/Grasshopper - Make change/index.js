/*
  Title:
    Grasshopper - Make change

  Description:
    You go to the store and have a 10 dollar bill to spend.
    You buy candy, chips, and soda. Find out how much change you get back from the cashier.

    Item	      Cost
    Candy	      $1.42
    Chips	      $2.40
    Soda	      $1.00

    Create 5 variables and use the cost from the table above to set their values.

    money
    candy
    chips
    soda
    change

  Kata Link:
    https://www.codewars.com/kata/grasshopper-make-change

  Discuss Link:
    https://www.codewars.com/kata/grasshopper-make-change/discuss

  Solutions Link:
    https://www.codewars.com/kata/grasshopper-make-change/solutions
*/

// Long Solution
/*
const money = 10
const candy = 1.42
const chips = 2.4
const soda = 1
const change = money - (candy + chips + soda)
*/

// Short Solution
const money = 10
const candy = 1.42
const chips = 2.4
const soda = 1

const orders = [
  { article: 'candy', quantity: 1, price: candy },
  { article: 'chips', quantity: 1, price: chips },
  { article: 'soda', quantity: 1, price: soda },
]

const change =
  money -
  orders.reduce((total, { quantity, price }) => total + quantity * price, 0)

// Function Export
module.exports = { money, candy, chips, soda, change }
