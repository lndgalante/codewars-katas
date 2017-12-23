/*
  Title:
    Moving Zeros To The End

  Description:
    Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

  Kata Link:
    https://www.codewars.com/kata/moving-zeros-to-the-end

  Discuss Link:
    https://www.codewars.com/kata/moving-zeros-to-the-end/discuss

  Solutions Link:
    https://www.codewars.com/kata/moving-zeros-to-the-end/solutions
*/

function moveZeros(array) {
  const arrayWithZeros = array.filter(number => number === 0)
  const arrayWithoutZeros = array.filter(number => number !== 0)

  return [...arrayWithoutZeros, ...arrayWithZeros]
}

// Function Export
module.exports = moveZeros
