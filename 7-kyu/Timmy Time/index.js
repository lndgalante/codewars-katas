/*
  Title:
    Timmy Time

  Description:
    Write a function changeTime which increases or decreases given time.
    Input param is string in HH:MM format and delta is integer value -1 or 1 in minutes.

  Examples:
    changeTime('10:00', 1) //return '10:01'
    changeTime('10:00', -1) //return '09:59'
    changeTime('23:59', 1) //return '00:00'
    changeTime('00:00', -1) //return '23:59'

  Kata Link:
    https://www.codewars.com/kata/timmy-time/

  Discuss Link:
    https://www.codewars.com/kata/timmy-time//discuss

  Solutions Link:
    https://www.codewars.com/kata/timmy-time//solutions
*/

// Long Solution
const moment = require('moment')

function changeTime(input, delta) {
  const [hour, minute] = input.split(':')

  return moment()
    .hour(hour)
    .minute(minute)
    .add(delta, 'minutes')
    .format('HH:mm')
}

// Function Export
module.exports = changeTime
