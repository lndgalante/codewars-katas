/*
  Title:
    USD => CNY

  Description:
    Create a function that converts US dollars (USD) to Chinese Yuan (CNY).
    The input is the amount of USD as an integer, and the output should be a string that states the amount of Yuan followed by 'Chinese Yuan'

  Examples:
    usdcny(15) // => '101.25 Chinese Yuan'
    usdcny(465) // => '3138.75 Chinese Yuan'

  Notes:
    The conversion rate you should use is 6.75 CNY for every 1 USD.
    All numbers shold be reounded to the nearest hundreth (e.g. 21.00 NOT 21.0 or 21) (HINT: google toFixed)

  Kata Link:
    https://www.codewars.com/kata/usd-equals->-cny

  Discuss Link:
    https://www.codewars.com/kata/usd-equals->-cny/discuss

  Solutions Link:
    https://www.codewars.com/kata/usd-equals->-cny/solutions
*/

// Long Solution
const usdcny = usd => `${(usd * 6.75).toFixed(2)} Chinese Yuan`

// Function Export
module.exports = usdcny
