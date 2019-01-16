/* eslint no-return-assign: 0 */

/*
  Title:
    Minimum Steps (Array Series #6)

  Description:
    Given an array of N integers, you have to find how many times you have to add up the smallest numbers in the array until their Sum  becomes greater or equal to K.

  Examples:
    Input >> Output Examples
    1- minimumSteps({1, 10, 12, 9, 2, 3}, 6)  ==>  return (2)

    Explanation:
    We  add two smallest elements  (1 + 2),  their sum is 3 .
    Then  we  add the next smallest number to it (3 + 3) , so  the sum becomes 6 .
    Now  the result is greater or equal to 6 ,  Hence the output is (2) i.e (2) operations are required to do this .

    2- minimumSteps({8 , 9, 4, 2}, 23)  ==> return (3)

    Explanation:
    We  add two smallest elements  (4 + 2),  their sum is 6 .
    Then  we  add the next smallest number to it (6 + 8) , so the sum becomes 14 .
    Now  we  add the next smallest number (14 + 9) , so the sum becomes 23  .
    Now  the result is greater or equal to 23 ,  Hence the output is (3) i.e (3) operations are required to do this .


    3- minimumSteps({19,98,69,28,75,45,17,98,67}, 464)  ==>  return (8)

    Explanation:
    We  add two smallest elements  (19 + 17),  their sum is 36 .
    Then  we  add the next smallest number to it (36 + 28) , so the sum becomes 64 .
    We need to keep doing this until the sum becomes greater or equal to K (464 in this case), which will require 8 Steps .



  Notes:
    - List size  is at least 3.
    - All numbers  will be  positive.
    - Numbers  could  occur more than once ,   (Duplications may exist).
    - Threshold  K  will always be reachable.

  Kata Link:
    https://www.codewars.com/kata/minimum-steps-array-series-number-6

  Discuss Link:
    https://www.codewars.com/kata/minimum-steps-array-series-number-6/discuss

  Solutions Link:
    https://www.codewars.com/kata/minimum-steps-array-series-number-6/solutions
*/

// Long Solution
/*
const minimumSteps = (numbers, value) => {
  const numbersSorted = [...numbers].sort((a, b) => a - b)
  let total = 0

  for (let index = 0; index < numbersSorted.length; index++) {
    total += numbersSorted[index]
    if (total >= value) return index
  }
}
*/

// Short Solution
const minimumSteps = (numbers, value) =>
  [...numbers].sort((a, b) => a - b).filter(number => (value -= number) > 0).length

// Function Export
module.exports = minimumSteps
