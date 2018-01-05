/*
  Title:

  Description:
    Inspired by the development team at Vooza, write the function howManyLightsabersDoYouOwn that
    accepts the name of a programmer, and returns the number of lightsabers owned by that person.
    The only person who owns lightsabers is Zach, by the way.
    He owns 18, which is an awesome number of lightsabers.
    Anyone else owns 0.

    No starting help here -- you'll need to know how to write a function
    that accepts a parameter and returns a value based on that parameter.


  Examples:
    howManyLightsabersDoYouOwn("anyone else") \\ should === 0
    howManyLightsabersDoYouOwn("Zach") \\ should === 18

  Kata Link:
    https://www.codewars.com/kata/how-many-lightsabers-do-you-own

  Discuss Link:
    https://www.codewars.com/kata/how-many-lightsabers-do-you-own/discuss

  Solutions Link:
    https://www.codewars.com/kata/how-many-lightsabers-do-you-own/solutions
*/

// Short Solution
const howManyLightsabersDoYouOwn = name => (name === 'Zach' ? 18 : 0)

// Function Export
module.exports = howManyLightsabersDoYouOwn
