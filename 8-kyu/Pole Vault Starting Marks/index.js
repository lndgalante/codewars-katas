/*
  Title:
    Pole Vault Starting Marks

  Description:
    For a pole vaulter, it is very important to begin the approach run at the best possible starting mark.
    This is affected by numerous factors and requires fine-tuning in practice.
    But there is a guideline that will help a beginning vaulter start at approximately the right location for the so-called "three-step approach," based on the vaulter's body height.

    This guideline was taught to me in feet and inches, but due to the international nature of Codewars,
    I am creating this kata to use metric units instead.

    You are given the following two guidelines to begin with:
    (1) A vaulter with a height of 1.52 meters should start at 9.45 meters on the runway.
    (2) A vaulter with a height of 1.83 meters should start at 10.67 meters on the runway.

    You will receive a vaulter's height in meters (which will always lie in a range between a minimum of 1.22 meters and a maximum of 2.13 meters).
    Your job is to return the best starting mark in meters, rounded to two decimal places.

    Hint: Based on the two guidelines given above, you will want to account for the change in starting mark per change in body height. This involves a linear relationship.

  Kata Link:
    https://www.codewars.com/kata/pole-vault-starting-marks

  Discuss Link:
    https://www.codewars.com/kata/pole-vault-starting-marks/discuss

  Solutions Link:
    https://www.codewars.com/kata/pole-vault-starting-marks/solutions
*/

// Long Solution
const startingMark = bodyHeight => {
  const m = (10.67 - 9.45) / (1.83 - 1.52)
  return Math.round((m * bodyHeight + 10.67 - m * 1.83) * 100) / 100
}

// Function Export
module.exports = startingMark
