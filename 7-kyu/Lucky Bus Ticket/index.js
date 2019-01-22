/*
  Title:
    Lucky Bus Ticket

  Description:
    In Russia regular bus tickets usually consist of 6 digits.
    The ticket is called lucky when the sum of the first three digits equals to the sum of the last three digits.
    Write a function to find out whether the ticket is lucky or not.
    Return true if so, otherwise return false.
    Consider that input is always a string. Watch examples below.

  Examples:
    isLucky('123321') => 1+2+3 = 3+2+1 => true // The ticket is lucky
    isLucky('12341234') => false // Only six-digit numbers allowed :(
    isLucky('12a21a') => false // Letters are not allowed :(
    isLucky('100200') => false // :(
    isLucky('22') => false // :(
    isLucky('abcdef') => false // :(

  Kata Link:
    https://www.codewars.com/kata/lucky-bus-ticket

  Discuss Link:
    https://www.codewars.com/kata/lucky-bus-ticket/discuss

  Solutions Link:
    https://www.codewars.com/kata/lucky-bus-ticket/solutions
*/

// Long Solution
/*
const sumNumbers = numbers => numbers.reduce((total, number) => total + Number(number), 0)

const isLucky = ticket => {
  if (ticket.length !== 6 || !/^[0-9]*$/g.test(ticket)) return false

  const ticketsDigits = [...ticket]
  const [firstHalf, secondHalf] = [ticketsDigits.slice(0, ticket.length / 2), ticketsDigits.slice(ticket.length / 2)]

  return sumNumbers(firstHalf) === sumNumbers(secondHalf)
}
*/

// Short Solution
const sumNumbers = numbers => numbers.reduce((total, number) => total + Number(number), 0)

const isLucky = numbers =>
  /^\d{6}$/g.test(numbers) && sumNumbers([...numbers].slice(0, 3)) === sumNumbers([...numbers].slice(3))

// Function Export
module.exports = isLucky
