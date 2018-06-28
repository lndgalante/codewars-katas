/*
  Title:
    Milk and Cookies for Santa

  Description:
    Write a function timeForMilkAndCookies (time_for_milk_and_cookies in Ruby) that accepts a Date object, and returns true if it's Christmas Eve (December 24th), false otherwise.
    Keep in mind Javascript's Date month is 0 based, while Ruby's Date month isn't.

  Examples:
    timeForMilkAndCookies( new Date( 2013, 11, 24 ) ) // December 24, 2013 => returns true
    timeForMilkAndCookies( new Date( 2013, 0, 23 ) ) // January 23, 2013 => returns false
    timeForMilkAndCookies( new Date( 3000, 11, 24 ) ) //  December 24, 3000 => returns true

  Kata Link:
    https://www.codewars.com/kata/milk-and-cookies-for-santa

  Discuss Link:
    https://www.codewars.com/kata/milk-and-cookies-for-santa/discuss

  Solutions Link:
    https://www.codewars.com/kata/milk-and-cookies-for-santa/solutions
*/

// Long Solution
/*
const timeForMilkAndCookies = date => {
  const [day, month] = [date.getDate(), date.getMonth()]
  return day === 24 && month === 11
}
*/

// Short Solution
const timeForMilkAndCookies = date =>
  date.getDate() === 24 && date.getMonth() === 11

// Function Export
module.exports = timeForMilkAndCookies
