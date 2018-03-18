/*
  Title:
    Name on billboard

  Description:
    You can print your name on a billboard ad.
    Find out how much it will cost you.
    Each letter has a default price of £30, but that can be different if you are given 2 parameters instead of 1.

    You can not use multiplier "*" operator.

    If your name would be Jeong-Ho Aristotelis, ad would cost £600. 20 leters * 30 = 600 (Space counts as a letter).

  Kata Link:
    https://www.codewars.com/kata/name-on-billboard

  Discuss Link:
    https://www.codewars.com/kata/name-on-billboard/discuss

  Solutions Link:
    https://www.codewars.com/kata/name-on-billboard/solutions
*/

// Long Solution
const billboard = (name, price = 30) =>
  name.split('').reduce(total => total + price, 0)

// Function Export
module.exports = billboard
