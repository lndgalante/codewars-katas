/*
  Title:
    Recycle!

  Description:
    You are having a BBQ, after the BBQ you are left with the rubbish. You have 3 recycling boxes:

    Red: Plastics, Green: Glass, Blue: Card.

    You will need to sort the rubbish according to the material and return the number of items in each box in the form of an array i.e [2,3,4] where 2 is the number of plastic items, 3 is the number of glass items and 4 is the number of card items. assume:
    Plastics > 0, Glass < 0, Card = 0

  Kata Link:
    https://www.codewars.com/kata/recycle

  Discuss Link:
    https://www.codewars.com/kata/recycle/discuss

  Solutions Link:
    https://www.codewars.com/kata/recycle/solutions
*/

// Long Solution
/*
const recycleMe = recycle => {
  const isPlastic = items => items > 0
  const isGlass = items => items < 0
  const isCard = items => items === 0

  const conditions = [isPlastic, isGlass, isCard]
  return conditions.map(condition => recycle.filter(condition).length)
}
*/

// Short Solution
const recycleMe = recycle => {
  const initialValues = [0, 0, 0]
  return recycle.reduce(
    ([red, green, blue], item) => [red + (item > 0), green + (item < 0), blue + (item === 0)],
    initialValues
  )
}

// Function Export
module.exports = recycleMe
