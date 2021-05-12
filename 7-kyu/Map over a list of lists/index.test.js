const gridMap = require('.')

const numberGrid = [
  [1, 2, 3, 4],
  [5, 6, 7, 8, 9],
  [0, 2, 4],
]

const charGrid = [
  ['H', 'e', 'l', 'l', 'o'],
  ['W', 'o', 'r', 'l', 'd', '!'],
]

test('Test 1', () => {
  expect(gridMap((x) => x + 1, numberGrid)).toEqual([
    [2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [1, 3, 5],
  ])
})

test('Test 2', () => {
  expect(gridMap((x) => x * 2, numberGrid)).toEqual([
    [2, 4, 6, 8],
    [10, 12, 14, 16, 18],
    [0, 4, 8],
  ])
})

test('Test 3', () => {
  expect(gridMap((x) => x ** 2, numberGrid)).toEqual([
    [1, 4, 9, 16],
    [25, 36, 49, 64, 81],
    [0, 4, 16],
  ])
})

test('Test 4', () => {
  expect(gridMap((x) => x.toUpperCase(), charGrid)).toEqual([
    ['H', 'E', 'L', 'L', 'O'],
    ['W', 'O', 'R', 'L', 'D', '!'],
  ])
})

test('Test 5', () => {
  expect(gridMap((x) => x.toLowerCase(), charGrid)).toEqual([
    ['h', 'e', 'l', 'l', 'o'],
    ['w', 'o', 'r', 'l', 'd', '!'],
  ])
})
