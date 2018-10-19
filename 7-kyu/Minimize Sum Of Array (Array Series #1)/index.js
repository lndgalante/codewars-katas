/*
  Title:
    Minimize Sum Of Array (Array Series #1)

  Description:
    Task

    Given an array of intgers , Find the minimum sum which is obtained from summing each Two integers product .
    Notes

        Array/list will contain positives only .
        Array/list will always has even size

    Input >> Output Examples

    1- minSum({5,4,2,3}) ==> return (22)

    Explanation:

        The minimum sum obtained from summing each two integers product , 5*2 + 3*4 = 22

    2- minSum({12,6,10,26,3,24}) ==> return (342)

    Explanation:

        The minimum sum obtained from summing each two integers product , 26*3 + 24*6 + 12*10 = 342

    3- minSum({9,2,8,7,5,4,0,6}) ==> return (74)

    Explanation:

        The minimum sum obtained from summing each two integers product , 9*0 + 8*2 +7*4 +6*5 = 74

    minSum({5,4,2,3}) // return 22

    Explanation ::
    5*2 +3*4 = 22

    minSum({12,6,10,26,3,24}) // return 342

    Explanation ::
    26*3 + 24*6 + 12*10 = 342

    minSum({9,2,8,7,5,4,0,6}) // return 74

    Explanation ::
    9*0 + 8*2 +7*4 +6*5 = 74


  Kata Link:
    https://www.codewars.com/kata/minimize-sum-of-array-array-series-number-1

  Discuss Link:
    https://www.codewars.com/kata/minimize-sum-of-array-array-series-number-1/discuss

  Solutions Link:
    https://www.codewars.com/kata/minimize-sum-of-array-array-series-number-1/solutions
*/

// Long Solution
/*
const minSum = arr => {
  let sum = 0
  const sortedArray = [...arr].sort((a, b) => a - b)

  for (let i = 0; i < sortedArray.length / 2; i++) {
    sum += sortedArray[i] * sortedArray[sortedArray.length - i - 1]
  }

  return sum
}
*/

// Short Solution
const minSum = arr =>
  [...arr]
    .sort((a, b) => a - b)
    .reduce(
      (total, number, index, array) =>
        total + number * array[array.length - index - 1],
      0
    ) / 2

// Function Export
module.exports = minSum
