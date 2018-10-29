/*
  Title:
    reverseIt

  Description:
    You have to create a function named reverseIt.

    Write your function so that in the case a string or a number is passed in as the data,
    you will return the data in reverse order. If the data is any other type, return it as it is.

  Examples:
    "Hello" -> "olleH"

    "314159" -> "951413"

    [1,2,3] -> [1,2,3]

  Kata Link:
    https://www.codewars.com/kata/reverseit-1

  Discuss Link:
    https://www.codewars.com/kata/reverseit-1/discuss

  Solutions Link:
    https://www.codewars.com/kata/reverseit-1/solutions
*/

// Long Solution
const reverse = data => [...String(data)].reverse().join('')

const reverseIt = data => {
  if (typeof data === 'string') return reverse(data)
  if (typeof data === 'number') return Number(reverse(data))

  return data
}

// Function Export
module.exports = reverseIt
