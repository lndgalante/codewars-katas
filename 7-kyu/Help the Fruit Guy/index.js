/*
  Title:
    Help the Fruit Guy

  Description:
    Our fruit guy has a bag of fruit (represented as an array of strings) where some fruits are rotten.
    He wants to replace all the rotten pieces of fruit with fresh ones.
    For example, given ["apple","rottenBanana","apple"] the replaced array should be ["apple","banana","apple"].
    Your task is to implement a method that accepts an array of strings containing fruits should returns an array of strings where all the rotten fruits are replaced by good ones.

  Notes:
    - If the array is null/nil/None or empty you should return empty array ([]).
    - The rotten fruit name will be in this camelcase (rottenFruit).
    - The returned array should be in lowercase.

  Kata Link:
    https://www.codewars.com/kata/help-the-fruit-guy

  Discuss Link:
    https://www.codewars.com/kata/help-the-fruit-guy/discuss

  Solutions Link:
    https://www.codewars.com/kata/help-the-fruit-guy/solutions
*/

// Long Solution
const removeRotten = bagOfFruits =>
  Array.isArray(bagOfFruits)
    ? bagOfFruits.map(fruit => fruit.toLowerCase().replace(/^rotten/g, ''))
    : []

// Function Export
module.exports = removeRotten
