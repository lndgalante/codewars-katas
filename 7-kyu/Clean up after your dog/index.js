/*
  Title:
    Clean up after your dog

  Description:
    You have stumbled across the divine pleasure that is owning a dog and a garden. Now time to pick up all the cr@p! :D

    Given a 2D array to represent your garden, you must find and collect all of the dog cr@p - represented by '@'.

    You will also be given the number of bags you have access to (bags), and the capactity of a bag (cap).
    If there are no bags then you can't pick anything up, so you can ignore cap.

    You need to find out if you have enough capacity to collect all the cr@p and make your garden clean again.

    If you do, return 'Clean', else return 'Cr@p'.

    Watch out though - if your dog is out there ('D'), he gets very touchy about being watched. If he is there you need to return 'Dog!!'.

  Examples:
    x=
    [[_,_,_,_,_,_]
     [_,_,_,_,@,_]
     [@,_,_,_,_,_]]
    bags = 2, cap = 2

    return  --> 'Clean'

  Kata Link:
    https://www.codewars.com/kata/clean-up-after-your-dog

  Discuss Link:
    https://www.codewars.com/kata/clean-up-after-your-dog/discuss

  Solutions Link:
    https://www.codewars.com/kata/clean-up-after-your-dog/solutions
*/

// Long Solution
/*
const _ = require('lodash')

const crap = (x, bags, cap) => {
  const gardenElements = _.flatten(x)
  if (gardenElements.includes('D')) return 'Dog!!'

  const totalCapacity = bags * cap
  const totalCrap = gardenElements.reduce((total, element) => (element === '@' ? total + 1 : total), 0)

  return totalCrap > totalCapacity ? 'Cr@p' : 'Clean'
}
*/

// Short Solution
/*
const crap = (x, bags, cap) => {
  const gardenElements = x.flat()
  if (gardenElements.includes('D')) return 'Dog!!'

  const totalCapacity = bags * cap
  const totalCrap = gardenElements.reduce((total, element) => (element === '@' ? total + 1 : total), 0)

  return totalCrap > totalCapacity ? 'Cr@p' : 'Clean'
}
*/

// Shorter Solution
const crap = (x, bags, cap) => {
  const totalCapacity = bags * cap
  const gardenElements = x.join('')

  if (gardenElements.includes('D')) return 'Dog!!'
  return (gardenElements.match(/@/g) || []).length <= totalCapacity ? 'Clean' : 'Cr@p'
}

// Function Export
module.exports = crap
