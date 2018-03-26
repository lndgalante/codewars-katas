/*
  Title:
    Simple Fun #352: Reagent Formula

  Description:
    Now we will confect a reagent. There are eight materials to choose from, numbered 1,2,..., 8 respectively.

    We know the rules of confect:
      material1 and material2 cannot be selected at the same time
      material3 and material4 cannot be selected at the same time
      material5 and material6 must be selected at the same time
      material7 or  material8 must be selected(at least one, or both)

    Task
      You are given a integer array formula. Array contains only digits 1-8 that represents material 1-8. Your task is to determine if the formula is valid. Returns true if it's valid, false otherwise.

  Examples:
    For formula = [1,3,7], The output should be true.

    For formula = [7,1,2,3], The output should be false.

    For formula = [1,3,5,7], The output should be false.

    For formula = [1,5,6,7,3], The output should be true.

    For formula = [5,6,7], The output should be true.

    For formula = [5,6,7,8], The output should be true.

    For formula = [6,7,8], The output should be false.

    For formula = [7,8], The output should be true.

  Notes:
    All inputs are valid. Array contains at least 1 digit. Each digit appears at most once.

  Kata Link:
    https://www.codewars.com/kata/simple-fun-number-352-reagent-formula

  Discuss Link:
    https://www.codewars.com/kata/simple-fun-number-352-reagent-formula/discuss

  Solutions Link:
    https://www.codewars.com/kata/simple-fun-number-352-reagent-formula/solutions
*/

// Long Solution
const isValid = formula => {
  const firstRule = !(formula.includes(1) && formula.includes(2))
  const secondRule = !(formula.includes(3) && formula.includes(4))
  const thirdRule = formula.includes(5) === formula.includes(6)
  const fourthRule = formula.includes(7) || formula.includes(8)

  return firstRule && secondRule && thirdRule && fourthRule
}
// Function Export
module.exports = isValid
