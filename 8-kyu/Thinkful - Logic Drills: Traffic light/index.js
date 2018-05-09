/*
  Title:
    Thinkful - Logic Drills: Traffic light

  Description:
    You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

    Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

    For example, update_light('green') should return 'yellow'.

  Kata Link:
    https://www.codewars.com/kata/thinkful-logic-drills-traffic-light

  Discuss Link:
    https://www.codewars.com/kata/thinkful-logic-drills-traffic-light/discuss

  Solutions Link:
    https://www.codewars.com/kata/thinkful-logic-drills-traffic-light/solutions
*/

// Long Solution
/*
const updateLight = current =>
  current === 'yellow' ? 'red' : current === 'green' ? 'yellow' : 'green'
*/

// Short Solution
const updateLight = current =>
  ({
    green: 'yellow',
    yellow: 'red',
    red: 'green',
  }[current])

// Function Export
module.exports = updateLight
