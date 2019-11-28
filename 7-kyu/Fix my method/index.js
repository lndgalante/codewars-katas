/*
  Title:
    Fix my method

  Description:
    I am kind of new to coding so I'm not sure what is wrong with my code.
    Property objMethod should be called by myFunction.
    Can you fix the syntax so myFunction will be working again? Please check things like braces, commas, and letter case.

  Notes:
    Returning just "string" is insufficient. We are required to use Object Literal Notation.

  Kata Link:
    https://www.codewars.com/kata/fix-my-method

  Discuss Link:
    https://www.codewars.com/kata/fix-my-method/discuss

  Solutions Link:
    https://www.codewars.com/kata/fix-my-method/solutions
*/

// Long Solution
/*
function myFunction() {
  const myObject = {
    objProperty: 'string',
    objMethod: function() {
      return myObject.objProperty
    },
  }

  return myObject
}
*/

// Short Solution
const myFunction = () => ({
  objProperty: 'string',
  objMethod() {
    return this.objProperty
  },
})

// Function Export
module.exports = myFunction
