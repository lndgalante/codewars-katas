/*
  Title:
    Boiled Eggs

  Description:
    You are the greatest chef on earth. No one boils eggs like you! Your restaurant is always full of guests, who love your boiled eggs. But when there is a greater order of boiled eggs, you need some time, because you have only one pot for your job. How much time do you need?

    Your Task
    Implement a function, which takes a non-negative integer, representing the number of eggs to boil. It must return the time in minutes (integer), which it takes to have all the eggs boiled.

    Rules
    * You can put at most 8 eggs into the pot at once
    * It takes 5 minutes to boil an egg
    * We assume, that the water is boiling all the time (no time to heat up)
    * For simplicity we also don't consider the time it takes to put eggs into the pot or get them out of it

  Examples:
    cookingTime(0); // must return 0
    cookingTime(5); // must return 5
    cookingTime(10); // must return 10

  Kata Link:
    https://www.codewars.com/kata/boiled-eggs

  Discuss Link:
    https://www.codewars.com/kata/boiled-eggs/discuss

  Solutions Link:
    https://www.codewars.com/kata/boiled-eggs/solutions
*/

// Long Solution
/*
const cookingTime = eggs => {
  const cookingTime = 5
  const maxEggs = 8

  if (eggs <= 0) return 0
  if (eggs <= 8) return 5

  return Math.ceil(eggs / maxEggs) * cookingTime
}
*/

// Short Solution
const cookingTime = eggs => Math.ceil(eggs / 8) * 5

// Function Export
module.exports = cookingTime
