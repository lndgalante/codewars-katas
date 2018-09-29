/*
  Title:
    Split The Bill

  Description:
    It's tricky keeping track of who is owed what when spending money in a group. Write a function to balance the books.

      * The function should take one parameter: an object/dict with two or more name-value pairs which represent the members of the group and the amount spent by each.
      * The function should return an object/dict with the same names, showing how much money the members should pay or receive.

    Further points:

      * The values should be positive numbers if the person should receive money from the group, negative numbers if they owe money to the group.
      * If value is a decimal, round to two decimal places.

  Examples:
    3 friends go out together: A spends £20, B spends £15, and C spends £10. The function should return an object/dict showing that A should receive £5, B should receive £0, and C should pay £5.

    var group = {
        A: 20,
        B: 15,
        C: 10
    }

    splitTheBill(group) // returns {A: 5, B: 0, C: -5}

  Kata Link:
    https://www.codewars.com/kata/split-the-bill

  Discuss Link:
    https://www.codewars.com/kata/split-the-bill/discuss

  Solutions Link:
    https://www.codewars.com/kata/split-the-bill/solutions
*/

// Long Solution
/*
const splitTheBill = x => {
  const spent = Object.values(x)
  const totalBill = spent.reduce((total, value) => total + value, 0)
  const billSplitted = totalBill / spent.length

  const result = {}
  Object.entries(x).forEach(([friend, spent]) => {
    const change = Number((spent - billSplitted).toFixed(2))
    result[friend] = change
  })

  return result
}
*/

// Short Solution
const splitTheBill = x => {
  const spents = Object.values(x)
  const totalBill = spents.reduce((total, value) => total + value, 0)
  const billSplitted = totalBill / spents.length

  return Object.entries(x).reduce((result, [friend, spent]) => {
    const change = Number((spent - billSplitted).toFixed(2))
    result[friend] = change

    return result
  }, {})
}

// Function Export
module.exports = splitTheBill
