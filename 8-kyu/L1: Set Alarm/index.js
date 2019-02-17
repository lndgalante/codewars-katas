/*
  Title:
    L1: Set Alarm

  Description:
    Write a function named setAlarm which receives two parameters.
    The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

    The function should return true if you are employed and not on vacation
    (because these are the circumstances under which you need to set an alarm).
    It should return false otherwise.

  Examples:
    setAlarm(true, true) -> false
    setAlarm(false, true) -> false
    setAlarm(false, false) -> false
    setAlarm(true, false) -> true

  Kata Link:
    https://www.codewars.com/kata/l1-set-alarm

  Discuss Link:
    https://www.codewars.com/kata/l1-set-alarm/discuss

  Solutions Link:
    https://www.codewars.com/kata/l1-set-alarm/solutions
*/

// Long Solution
const setAlarm = (employed, vacation) => employed && !vacation

// Function Export
module.exports = setAlarm
