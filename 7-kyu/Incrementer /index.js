/*
  Title:
    Incrementer

  Description:
    Given an input of an array of digits num, return the array with each digit incremented by its position in the array.
    For example, the first digit will be incremented by 1, the second digit by 2 etc.
    Make sure to start counting your positions from 1 and not 0.

    incrementer({1,2,3}) => {2,4,6}

    Your result can only contain single digit numbers, so if adding a digit with it's position gives you a multiple-digit number, only the last digit of the number should be returned

    incrementer({4,6,9,1,3}) => {5,8,2,5,8}

      - 9 + 3 (position of 9 in array) = 12
      - Only its last digit 2 should be returnedLastly, return {} if your array is empty! Arrays will only contain numbers so don't worry about checking that.

    Lastly, return {} if your array is empty! Arrays will only contain numbers so don't worry about checking that.

    Kata Link:
    https://www.codewars.com/kata/incrementer

  Discuss Link:
    https://www.codewars.com/kata/incrementer/discuss

  Solutions Link:
    https://www.codewars.com/kata/incrementer/solutions
*/

// Long Solution
/*
const incrementer = nums => {
  return nums.map((num, index) => {
    const result = num + (index + 1)
    const resultStr = String(result)

    if (resultStr.length === 1) return result
    return Number(resultStr[resultStr.length - 1])
  })
}
*/

// Short Solution
const incrementer = nums => nums.map((num, index) => (num + index + 1) % 10)

// Function Export
module.exports = incrementer
