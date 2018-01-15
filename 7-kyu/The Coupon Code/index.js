/*
  Title:
    The Coupon Code

  Description:
    Your online store likes to give out coupons for special occasions.
    Some customers try to cheat the system by entering invalid codes or using expired coupons.

    Your mission:
    Write a function called checkCoupon to verify that a coupon is valid and not expired.
    If the coupon is good, return true. Otherwise, return false.

    A coupon expires at the END of the expiration date.
    All dates will be passed in as strings in this format: "June 15, 2014"

  Kata Link:
    https://www.codewars.com/kata/the-coupon-code

  Discuss Link:
    https://www.codewars.com/kata/the-coupon-code/discuss

  Solutions Link:
    https://www.codewars.com/kata/the-coupon-code/solutions
*/

// Long Solution
/*
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  if (
    enteredCode === correctCode &&
    new Date(currentDate).getTime() <= new Date(expirationDate).getTime()
  )
    return true

  return false
}
*/

// Short Solution
const checkCoupon = (enteredCode, correctCode, currentDate, expirationDate) =>
  enteredCode === correctCode &&
  new Date(currentDate).getTime() <= new Date(expirationDate).getTime()

// Function Export
module.exports = checkCoupon
