/*
  Title:
    Case swapping

  Description:
    Given a string, swap the case for each of the letters.

  Examples:
    swap ""         `shouldBe` ""
    swap "CodeWars" `shouldBe` "cODEwARS"
    swap "abc"      `shouldBe` "ABC"
    swap "ABC"      `shouldBe` "abc"
    swap "123235"   `shouldBe` "123235"


  Kata Link:
    https://www.codewars.com/kata/case-swapping

  Discuss Link:
    https://www.codewars.com/kata/case-swapping/discuss

  Solutions Link:
    https://www.codewars.com/kata/case-swapping/solutions
*/

// Long Solution
/*
const swap = str =>
  str
    .split('')
    .map(element => (typeof element !== 'string' ? element : swapCase(element)))
    .join('')
*/

// Short Solution
const swapCase = str =>
  str === str.toUpperCase() ? str.toLowerCase() : str.toUpperCase()

const swap = str => str.replace(/[a-z]/gi, char => swapCase(char))

// Function Export
module.exports = swap
