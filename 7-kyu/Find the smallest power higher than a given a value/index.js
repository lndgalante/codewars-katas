/*
  Title:
    Find the smallest power higher than a given a value

  Description:
    We have the number 12385. We want to know the value of the closest cube but higher than 12385. The answer will be 13824.
    Now, another case. We have the number 1245678. We want to know the 5th power, closest and higher than that number. The value will be 1419857.
    We need a function find_next_power ( findNextPower in JavaScript, CoffeeScript and Haskell), that receives two arguments,
    a value val, and the exponent of the power,pow_, and outputs the value that we want to find.

  Examples:
    find_next_power(12385, 3) == 13824

    find_next_power(1245678, 5) == 1419857

    findNextPower(12385, 3) == 13824

    findNextPower(1245678, 5) == 1419857

    find_next_power(12385, 3) == 13824

    find_next_power(1245678, 5) == 1419857

    findNextPower 12385 3 `shouldBe` 13824

    findNextPower 1245678 5 `shouldBe` 1419857

    findNextPower(12385, 3) == 13824

    findNextPower(1245678, 5) == 1419857

  Notes:
    The value, val will be always a positive integer.
    The power, pow_, always higher than 1.

  Kata Link:
    https://www.codewars.com/kata/find-the-smallest-power-higher-than-a-given-a-value

  Discuss Link:
    https://www.codewars.com/kata/find-the-smallest-power-higher-than-a-given-a-value/discuss

  Solutions Link:
    https://www.codewars.com/kata/find-the-smallest-power-higher-than-a-given-a-value/solutions
*/

// Long Solution
const findNextPower = (val, pow) => (Math.floor(val ** (1 / pow)) + 1) ** pow

// Function Export
module.exports = findNextPower
