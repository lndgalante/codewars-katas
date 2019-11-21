/* eslint no-return-assign: 0 */

/*
  Title:
    Generate HTML links

  Description:
    Generate HTML links
    We need a HTML menu.... but writing HTML over and-over-again is boooring... Let's just generate it instead!

    Task:
    Write a function generateMenu() with the following inputs/output:

    Inputs:
    menuItems: An array of objects (with url and text properties), which represents our menu items

    Output:
    A string of HTML containing an anchor tag for each element of menuItems (with the appropriate href attribute and text content)

  Kata Link:
    https://www.codewars.com/kata/generate-html-links

  Discuss Link:
    https://www.codewars.com/kata/generate-html-links/discuss

  Solutions Link:
    https://www.codewars.com/kata/generate-html-links/solutions
*/

// Long Solution
/*
const generateMenu = menuItems => menuItems.map(({ url, text }) => `<a href="${url}">${text}</a>`).join('')
*/

// Short Solution
const generateMenu = menuItems =>
  menuItems.reduce((links, { url, text }) => (links += `<a href="${url}">${text}</a>`), '')

// Function Export
module.exports = generateMenu
