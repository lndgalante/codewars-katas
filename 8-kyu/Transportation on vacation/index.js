/*
  Title:
    Transportation on vacation

  Description:
    After a hard quarter in the office you decide to get some rest on a vacation.
    So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

    You will need a rental car in order for you to get around in your vacation.
    The manager of the car rental makes you some good offers.

    Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total.
    Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

    Write a code that gives out the total amount for different days(d).

  Kata Link:
    https://www.codewars.com/kata/transportation-on-vacation

  Discuss Link:
    https://www.codewars.com/kata/transportation-on-vacation/discuss

  Solutions Link:
    https://www.codewars.com/kata/transportation-on-vacation/solutions
*/

// Long Solution
/*
function rentalCarCost(d) {
  const base = 40

  if (d >= 7) return d * base - 50
  if (d >= 3) return d * base - 20

  return d * base
}
*/

// Short Solution
const baseCost = (days, rate) => days * rate

const discountRate = days => (days >= 7 ? 50 : days >= 3 ? 20 : 0)

const rentalCarCost = days => baseCost(days, 40) - discountRate(days)

// Function Export
module.exports = rentalCarCost
