/* eslint object-shorthand: 0 */

/*
  Title:
    Lexical this

  Description:
    Complete the Person object, by completing the FillFriends function to fill the _friends Array for the person object.
    Return the person object with the Name, Friends and FillFriends function filled out which will fill the input into the Friends property.


  Kata Link:
    https://www.codewars.com/kata/lexical-this

  Discuss Link:
    https://www.codewars.com/kata/lexical-this/discuss

  Solutions Link:
    https://www.codewars.com/kata/lexical-this/solutions
*/

// Long Solution
const Person = () => {
  const person = {
    _name: 'Leroy',
    _friends: [],
    fillFriends: function(f) {
      this._friends.push(...f)
    },
  }

  return person
}

// Function Export
module.exports = Person
