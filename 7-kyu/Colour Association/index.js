/*
  Title:
    Colour Association

  Description:
    Colour plays an important role in our lifes.
    Most of us like this colour better then another.
    User experience specialists believe that certain colours have certain psychological meanings for us.

    You are given a 2D array, composed of a colour and its 'common' association in each array element.
    The function you will write needs to return the colour as 'key' and association as its 'value'.

  Examples:
    var array = ["white", "goodness"] //returns {white: 'goodness'}

  Kata Link:
    https://www.codewars.com/kata/colour-association

  Discuss Link:
    https://www.codewars.com/kata/colour-association/discuss

  Solutions Link:
    https://www.codewars.com/kata/colour-association/solutions
*/

// Long Solution
/*
 const colourAssociation = array => array.reduce((result, [color, meaning]) => [...result, { [color]: meaning }], [])
*/

// Short Solution
const colourAssociation = array => array.map(([colour, meaning]) => ({ [colour]: meaning }))

// Function Export
module.exports = colourAssociation
