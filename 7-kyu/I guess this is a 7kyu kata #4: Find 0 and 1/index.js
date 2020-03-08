/* eslint max-params: 0 */

/*
  Title:
    I guess this is a 7kyu kata #4: Find 0 and 1

  Description:
    Give You an 2D array that only contains 0 and 1, please find out how many 1 are surrounded by 0 or 0 surrounded by 1.
    "Surrounded" means that its four directions(up down left right) all are diffrent numbers.

  Examples:
    [
      [0,1,1,0,1,1,0,1,0],
      [1,0,1,0,1,1,0,1,0],
      [0,1,1,0,0,1,0,1,0],
      [0,0,1,0,1,0,1,1,0],
      [0,0,1,0,0,1,0,1,0],
      [0,0,1,0,1,0,0,1,0],
      [0,0,1,0,0,1,0,1,0]
    ]

    There are three 1 surrounded by 0(the x in the array):
    [
      [0,1,1,0,1,1,0,1,0],
      [1,0,1,0,1,1,0,1,0],
      [0,1,1,0,0,1,0,1,0],
      [0,0,1,0,x,0,1,1,0],
      [0,0,1,0,0,x,0,1,0],
      [0,0,1,0,x,0,0,1,0],
      [0,0,1,0,0,1,0,1,0]
    ]

    There are two 0 surrounded by 1(the x in the array):
    [
      [0,1,1,0,1,1,0,1,0],
      [1,x,1,0,1,1,0,1,0],
      [0,1,1,0,0,1,0,1,0],
      [0,0,1,0,1,x,1,1,0],
      [0,0,1,0,0,1,0,1,0],
      [0,0,1,0,1,0,0,1,0],
      [0,0,1,0,0,1,0,1,0]
    ]

  Notes:

  Kata Link:
    https://www.codewars.com/kata/57d237f25dc38ede6e00026b

  Discuss Link:
    https://www.codewars.com/kata/57d237f25dc38ede6e00026b/discuss

  Solutions Link:
    https://www.codewars.com/kata/57d237f25dc38ede6e00026b/solutions
*/

// Long Solution
const checkLeftCellEqualsNumber = (row, cellIndex, cellNumber, number) => {
  const leftCell = row[cellIndex - 1];
  return leftCell !== cellNumber && leftCell === number;
};

const checkRightCellEqualsNumber = (row, cellIndex, cellNumber, number) => {
  const rightCell = row[cellIndex + 1];
  return rightCell !== cellNumber && rightCell === number;
};

const checkTopCellEqualsNumber = (matrix, rowIndex, cellIndex, cellNumber, number) => {
  const topCell = (matrix[rowIndex - 1] || [])[cellIndex];
  return topCell !== cellNumber && topCell === number;
};

const checkBottomCellEqualsNumber = (matrix, rowIndex, cellIndex, cellNumber, number) => {
  const bottomCell = (matrix[rowIndex + 1] || [])[cellIndex];
  return bottomCell !== cellNumber && bottomCell === number;
};

const checkAllSides = (matrix, row, rowIndex, cellIndex, cellNumber, number) => {
  const possibleNumbers = [0, 1];
  if (!possibleNumbers.includes(cellNumber) && cellNumber === number) return false;

  const allSidesChecked =
    checkLeftCellEqualsNumber(row, cellIndex, cellNumber, number) &&
    checkRightCellEqualsNumber(row, cellIndex, cellNumber, number) &&
    checkTopCellEqualsNumber(matrix, rowIndex, cellIndex, cellNumber, number) &&
    checkBottomCellEqualsNumber(matrix, rowIndex, cellIndex, cellNumber, number);

  return allSidesChecked;
};

const find01 = (matrix) => {
  let totalOnesSurrounded = 0;
  let totalZerosSurrounded = 0;

  matrix.forEach((row, rowIndex) => {
    row.forEach((cell, cellIndex) => {
      if (checkAllSides(matrix, row, rowIndex, cellIndex, cell, 0)) totalOnesSurrounded++;
      if (checkAllSides(matrix, row, rowIndex, cellIndex, cell, 1)) totalZerosSurrounded++;
    });
  });

  return totalZerosSurrounded + totalOnesSurrounded;
};

// Function Export
module.exports = find01;
