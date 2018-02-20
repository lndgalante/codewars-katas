/*
  Title:
    String cleaning

  Description:
    Your boss decided to save money by purchasing some cut-rate optical character recognition software for scanning in the text of old novels to your database.
    At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text.

    Your harried co-workers are looking to you for a solution to take this garbled text and remove all of the numbers.
    Your program will take in a string and clean out all numeric characters, and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact.

  Examples:
    stringClean('! !') == '! !'
    stringClean('123456789') == ''
    stringClean('This looks5 grea8t!') == 'This looks great!'

  Kata Link:
    https://www.codewars.com/kata/string-cleaning

  Discuss Link:
    https://www.codewars.com/kata/string-cleaning/discuss

  Solutions Link:
    https://www.codewars.com/kata/string-cleaning/solutions
*/

// Long Solution
const stringClean = s => s.replace(/\d/g, '')

// Function Export
module.exports = stringClean
