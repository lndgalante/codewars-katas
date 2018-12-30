/*
  Title:
    Are there doubles?

  Description:
    Your job is to build a function which determines whether or not there are double characters in a string (including whitespace characters). For example aa, !! or  .
    You want the function to return true if the string contains double characters and false if not.
    The test should not be case sensitive; for example both aa & saA return true.

  Examples:
    double_check("abca")
    #returns False

    double_check("aabc")
    #returns True

    double_check("a 11 c d")
    #returns True

    double_check("AabBcC")
    #returns True

    double_check("a b  c")
    #returns True

    double_check("a b c d e f g h i h k")
    #returns False

    double_check("2020")
    #returns False

    double_check("a!@€£#$%^&*()_-+=}]{[|\"':;?/>.<,~")
    #returns False

    double_check("abca")
    #returns false

    double_check("aabc")
    #returns true

    double_check("a 11 c d")
    #returns true

    double_check("AabBcC")
    #returns true

    double_check("a b  c")
    #returns true

    double_check("a b c d e f g h i h k")
    #returns false

    double_check("2020")
    #returns false

    double_check("a!@#$%^&*()_-+=}]{[|\"':;?/>.<,~")
    #returns false

    doubleCheck "abca"
    --returns False

    doubleCheck "aabc"
    --returns True

    doubleCheck "a 11 c d"
    --returns True

    doubleCheck "AabBcC"
    --returns True

    doubleCheck "a b  c"
    --returns True

    doubleCheck "a b c d e f g h i h k"
    --returns False

    doubleCheck "2020"
    --returns False

    doubleCheck "a!@€£#$%^&*()_-+=}]{[|\"':;?/>.<,~"
    --returns False

    doubleCheck "abca"
    #returns false

    doubleCheck "aabc"
    #returns true

    doubleCheck "a 11 c d"
    #returns true

    doubleCheck "AabBcC"
    #returns true

    doubleCheck "a b  c"
    #returns true

    doubleCheck "a b c d e f g h i h k"
    #returns false

    doubleCheck "2020"
    #returns false

    doubleCheck "a!@€£#$%^&*()_-+=}]{[|\"':;?/>.<,~"
    #returns false

    doubleCheck("abca")
    //returns false

    doubleCheck("aabc")
    //returns true

    doubleCheck("a 11 c d")
    //returns true

    doubleCheck("AabBcC")
    //returns true

    doubleCheck("a b  c")
    //returns true

    doubleCheck("a b c d e f g h i h k")
    //returns false

    doubleCheck("2020")
    //returns false

    doubleCheck("a!@€£#$%^&*()_-+=}]{[|\"':;?/>.<,~")
    //returns false

  Kata Link:
    https://www.codewars.com/kata/are-there-doubles

  Discuss Link:
    https://www.codewars.com/kata/are-there-doubles/discuss

  Solutions Link:
    https://www.codewars.com/kata/are-there-doubles/solutions
*/

// Long Solution
/*
const doubleCheck = str => [...str.toLowerCase()].some((char, index, array) => char === array[index + 1])
*/

// Short Solution - https://regexr.com/45ljb
const doubleCheck = str => /(.)\1/i.test(str)

// Function Export
module.exports = doubleCheck
