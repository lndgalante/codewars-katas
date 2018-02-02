/*
  Title:
    Dollars and Cents

  Description:
    The company you work for has just been awarded a contract to build a payment gateway. In order to help move things along,
    you have volunteered to create a function that will take a float and return the amount formatting in dollars and cents.

    39.99 becomes $39.99

    The rest of your team will make sure that the argument is sanitized before being passed
    to your function although you will need to account for adding trailing zeros if they are missing (though you won't have to worry about a dangling period).

    Good luck! Your team knows they can count on you!

  Examples:
    3 needs to become $3.00

    3.1 needs to become $3.10

  Kata Link:
    https://www.codewars.com/kata/dollars-and-cents

  Discuss Link:
    https://www.codewars.com/kata/dollars-and-cents/discuss

  Solutions Link:
    https://www.codewars.com/kata/dollars-and-cents/solutions
*/

// Long Solution
const formatMoney = amount => `$${amount.toFixed(2)}`

// Function Export
module.exports = formatMoney
