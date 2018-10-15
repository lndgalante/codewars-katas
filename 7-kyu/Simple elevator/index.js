/*
  Title:
    Simple elevator

  Description:
    There is a house with 4 levels. In that house there is an elevator.
    You can program this elevator to go up or down, depending on what button the user touches inside the elevator.

    valid levels must be only these numbers: 0,1,2,3

    valid buttons must be only these strings: '0','1','2','3'

    possible return values are these numbers: -3,-2,-1,0,1,2,3

    If the elevator is on the ground floor(0th level) and the user touches button '2' the elevator must go 2 levels up, so our function must return 2.

    If the elevator is on the 3rd level and the user touches button '0' the elevator must go 3 levels down, so our function must return -3.

    If the elevator is on the 2nd level, and the user touches button '2' the elevator must remain on the same level, so we return 0.

    We cannot endanger the lives of our passengers, so if we get erronous inputs, our elevator must remain on the same level. So for example:

        * goto(2,'4') must return 0, because there is no button '4' in the elevator.
        * goto(4,'0') must return 0, because there is no level 4.
        * goto(3,undefined) must return 0.
        * goto(undefined,'2') must return 0.
        * goto([],'2') must return 0 because the type of the input level is array instead of a number.
        * goto(3,{}) must return 0 because the type of the input button is object instead of a string.

  Kata Link:
    https://www.codewars.com/kata/simple-elevator

  Discuss Link:
    https://www.codewars.com/kata/simple-elevator/discuss

  Solutions Link:
    https://www.codewars.com/kata/simple-elevator/solutions
*/

// Long Solution
const goto = (level, button, maxLvl = 4) => {
  const validLevels = Array.from({ length: maxLvl }, (_, index) => index)
  const validButtons = Array.from({ length: maxLvl }, (_, index) => `${index}`)

  if (!validLevels.includes(level) || !validButtons.includes(button)) return 0
  if (level === Number(button)) return 0

  return Number(button) - level
}

// Function Export
module.exports = goto
