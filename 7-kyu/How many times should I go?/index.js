/*
  Title:
    How many times should I go?

  Description:
    Lot of museum allow you to be a member, for a certain amount amount_by_year you can have unlimitted acces to the museum.
    In this kata you should complete a function in order to know after how many visit it will be better to take an annual pass.
    The function take 2 arguments annual_price and individual_price.

  Kata Link:
    https://www.codewars.com/kata/how-many-times-should-i-go

  Discuss Link:
    https://www.codewars.com/kata/how-many-times-should-i-go/discuss

  Solutions Link:
    https://www.codewars.com/kata/how-many-times-should-i-go/solutions
*/

// Long Solution
const howManyTimes = (annualPrice, individualPrice) => Math.ceil(annualPrice / individualPrice)

// Function Export
module.exports = howManyTimes
