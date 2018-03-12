/*
  Title:
    Holiday VIII - Duty Free

  Description:
    The purpose of this kata is to work out just how many bottles of duty free whiskey you would have to buy such that the saving over the normal high street price would effectively cover the cost of your holiday.

    You will be given the high street price (normPrice), the duty free discount (discount) and the cost of the holiday.

    For example, if a bottle cost £10 normally and the discount in duty free was 10%, you would save £1 per bottle. If your holiday cost £500, the answer you should return would be 500.

    All inputs will be integers. Please return an integer. Round down.

  Kata Link:
    https://www.codewars.com/kata/holiday-viii-duty-free

  Discuss Link:
    https://www.codewars.com/kata/holiday-viii-duty-free/discuss

  Solutions Link:
    https://www.codewars.com/kata/holiday-viii-duty-free/solutions
*/

// Long Solution
const dutyFree = (normPrice, discount, hol) =>
  Math.floor(hol / (normPrice * discount / 100))

// Function Export
module.exports = dutyFree
