/*
  Title:
    Selective fear of numbers

  Description:
    I've got a crazy mental illness. I dislike numbers a lot. But it's a little complicated:
    The number I'm feared of depends on which day of week it is...
    This a concrete description of my mental illness:

    Monday --> 12

    Tuesday --> numbers greater than 95

    Wednesday --> 34

    Thursday --> 0

    Friday --> numbers divisable by 2

    Saturday --> 56

    Sunday --> 666 or -666

    Write a function which takes a string (day of week) and an integer (number to be tested) so it tells the doctor if I'm feared or not. (return a boolean)

  Kata Link:
    https://www.codewars.com/kata/selective-fear-of-numbers

  Discuss Link:
    https://www.codewars.com/kata/selective-fear-of-numbers/discuss

  Solutions Link:
    https://www.codewars.com/kata/selective-fear-of-numbers/solutions
*/

// Long Solution
/*
const AmIAfraid = (day, num) => {
  if (day === 'Monday' && num === 12) return true
  if (day === 'Tuesday' && num > 95) return true
  if (day === 'Wednesday' && num === 34) return true
  if (day === 'Thursday' && num === 0) return true
  if (day === 'Friday' && num % 2 === 0) return true
  if (day === 'Saturday' && num === 56) return true
  if (day === 'Sunday' && (num === 666 || num === -666)) return true

  return false
}
*/

// Short Solution
const dayAndCondition = {
  Monday: number => number === 12,
  Tuesday: number => number > 95,
  Wednesday: number => number === 34,
  Thursday: number => number === 0,
  Friday: number => number % 2 === 0,
  Saturday: number => number === 56,
  Sunday: number => number === 666 || number === -666,
}

const amIAfraid = (day, num) => dayAndCondition[day](num)

// Function Export
module.exports = amIAfraid
