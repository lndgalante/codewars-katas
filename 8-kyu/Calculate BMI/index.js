/*
  Title:
    Calculate BMI

  Description:
    Write function bmi that calculates body mass index (bmi = weight / height ^ 2).

    if bmi <= 18.5 return "Underweight"

    if bmi <= 25.0 return "Normal"

    if bmi <= 30.0 return "Overweight"

    if bmi > 30 return "Obese"
*/

// Long Solution
function bmi(weight, height) {
  let bmi = weight / (height ^ 2)
  let y;
   if (bmi <= 18.5) {
      y = "Underweight"
    } else if(bmi <= 25.0) {
      y =  "Overweight"
    } else if(bmi <= 30.0) {
      y = "Normal"
    } else if (bmi > 30){
      y = "Obese"
    }
  return y
}

// Function Export
module.exports = bmi
