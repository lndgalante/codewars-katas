/*
  Title:
    Validate credit card expiry date

  Description:
    It is a simple, real world task.
    You will receive a single string as input. It will have the month (2 digits) and year(2 or 4 digits).
    These are separated by one character ("-" or "/", maybe some spaces too).
    For example:

    - 02/21
    - 02 / 21
    - 02 / 2021
    - 02-2021

    Assume that all dates are in the XXI century.

    Your task is to write a function that returns true or false if the expiry date is not in the past.
    Note, current month should still return true.

  Kata Link:
    https://www.codewars.com/kata/58c3fbe3ea65729f3800007d

  Discuss Link:
    https://www.codewars.com/kata/58c3fbe3ea65729f3800007d/discuss

  Solutions Link:
    https://www.codewars.com/kata/58c3fbe3ea65729f3800007d/solutions
*/

// Long Solution | Also can be use the following RegExp: -|\/
function checkExpiryValid(date) {
  const [month, year] = date.split(/(\d{2}).+(\d{2,4})/g).filter(Boolean);
  const parsedYear = year.length === 2 ? `20${year}` : year;

  const currentDate = new Date();
  const cardExpiryDate = new Date(parsedYear, month);

  return cardExpiryDate.getTime() > currentDate.getTime();
}

// Function Export
module.exports = checkExpiryValid;
