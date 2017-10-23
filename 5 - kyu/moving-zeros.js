/* 
  Title:
    Moving Zeros To The End

  Description:
    Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements. 

  Link:
    https://www.codewars.com/kata/52597aa56021e91c93000cb0
*/

function moveZeros(array) {
  const arrayWithZeros = array.filter(number => number === 0)
  const arrayWithoutZeros = array.filter(number => number !== 0)

  return [...arrayWithoutZeros, ...arrayWithZeros]
}

// Test to pass
console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, 'a']))
// => It should return [false,1,1,2,1,3,"a",0,0]
