/*
  Title:
    Drink about

  Description:
    Kids drink toddy.
    Teens drink coke.
    Young adults drink beer.
    Adults drink whisky.
    Make a function that receive age, and return what they drink.

  Examples:
    peopleWithAgeDrink(13) === "drink toddy"
    peopleWithAgeDrink(17) === "drink coke"
    peopleWithAgeDrink(18) === "drink beer"
    peopleWithAgeDrink(20) === "drink beer"
    peopleWithAgeDrink(30) === "drink whisky"

  Notes:
    * Children under 14 old.
    * Teens under 18 old.
    * Young under 21 old.
    * Adults have 21 or more.

  Kata Link:
    https://www.codewars.com/kata/drink-about

  Discuss Link:
    https://www.codewars.com/kata/drink-about/discuss

  Solutions Link:
    https://www.codewars.com/kata/drink-about/solutions
*/

// Long Solution
/*
const peopleWithAgeDrink = old => {
  if (old < 14) return 'drink toddy'
  if (old < 18) return 'drink coke'
  if (old < 21) return 'drink beer'
  else return 'drink whisky'
}
*/

// Short Solution
const peopleWithAgeDrink = old =>
  old < 14
    ? 'drink toddy'
    : old < 18 ? 'drink coke' : old < 21 ? 'drink beer' : 'drink whisky'

// Function Export
module.exports = peopleWithAgeDrink
