/*
  Title:
    Remove anchor from URL

  Description:
    Complete the function/method so that it returns the url with anything after the anchor (#) removed.

  Examples:
    // returns 'www.codewars.com'
    removeUrlAnchor('www.codewars.com#about')

    // returns 'www.codewars.com?page=1'
    removeUrlAnchor('www.codewars.com?page=1')

  Kata Link:
    https://www.codewars.com/kata/remove-anchor-from-url

  Discuss Link:
    https://www.codewars.com/kata/remove-anchor-from-url/discuss

  Solutions Link:
    https://www.codewars.com/kata/remove-anchor-from-url/solutions
*/

// Long Solution
// const removeUrlAnchor = url => url.split('#')[0]

// Alternative Solution - https://regexr.com/3on23
const removeUrlAnchor = url => url.replace(/#.*/g, '')

// Function Export
module.exports = removeUrlAnchor
