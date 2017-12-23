/*
  Title:
    Pete, the baker

  Description:
    Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths.
    Can you help him to find out, how many cakes he could bake considering his recipes?

    Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer).
    For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

  Examples:
    cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200});
    // must return 2

    cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000});
    // must return 0

  Kata Link:
    https://www.codewars.com/kata/pete-the-baker

  Discuss Link:
    https://www.codewars.com/kata/pete-the-baker/discuss

  Solutions Link:
    https://www.codewars.com/kata/pete-the-baker/solutions
 */

function cakes(recipe, available) {
  if (Object.keys(recipe).length > Object.keys(available).length) return 0

  const quantity = []

  for (let keyRecipe in recipe) {
    if (recipe[keyRecipe] === 0) {
      quantity.push(0)
      continue
    }
    for (let keyAvailable in available) {
      if (keyRecipe === keyAvailable)
        quantity.push(Math.floor(available[keyAvailable] / recipe[keyRecipe]))
    }
  }

  return Math.min(...quantity)
}

// Function Export
module.exports = cakes
