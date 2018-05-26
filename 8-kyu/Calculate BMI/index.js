/*
  Title:
    Calculate BMI

  Description:
    Write function bmi that calculates body mass index (bmi = weight / height ^ 2).

    if bmi <= 18.5 return "Underweight"

    if bmi <= 25.0 return "Normal"

    if bmi <= 30.0 return "Overweight"

    if bmi > 30 return "Obese"

  Kata Link:
    https://www.codewars.com/kata/calculate-bmi

  Discuss Link:
    https://www.codewars.com/kata/calculate-bmi/discuss

  Solutions Link:
    https://www.codewars.com/kata/calculate-bmi/solutions
*/

// Long Solution
function bmi(weight, height) {
  const bmi = weight / height ** 2

  if (bmi <= 18.5) return 'Underweight'
  if (bmi <= 25) return 'Normal'
  if (bmi <= 30) return 'Overweight'

  return 'Obese'
}

// Function Export
module.exports = bmi
