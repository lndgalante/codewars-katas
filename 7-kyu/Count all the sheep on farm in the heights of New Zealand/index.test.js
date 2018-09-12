const lostSheep = require('.')

test('Test 1', () => {
  expect(lostSheep([1, 2], [3, 4], 15)).toBe(5)
})

test('Test 2', () => {
  expect(lostSheep([3, 1, 2], [4, 5], 21)).toBe(6)
})

test('Test 3', () => {
  expect(lostSheep([5, 1, 4], [5, 4], 29)).toBe(10)
})

test('Test 4', () => {
  expect(lostSheep([11, 23, 3, 4, 15], [7, 14, 9, 21, 15], 300)).toBe(178)
})

test('Test 5', () => {
  expect(lostSheep([2, 7, 13, 17], [23, 56, 44, 12, 1, 2, 1], 255)).toBe(77)
})

test('Test 6', () => {
  expect(lostSheep([2, 5, 8], [11, 23, 3, 4, 15, 112, 12, 4], 355)).toBe(156)
})

test('Test 7', () => {
  expect(lostSheep([1, 1, 1, 2, 1, 2], [2, 1, 2, 1, 2, 1], 30)).toBe(13)
})

test('Test 8', () => {
  expect(lostSheep([5, 10, 15], [11, 23, 3, 4, 15], 89)).toBe(3)
})

test('Test 9', () => {
  expect(lostSheep([3, 6, 9, 12], [3, 2, 1, 2, 3, 1], 44)).toBe(2)
})

test('Test 10', () => {
  expect(lostSheep([], [], 15)).toBe(15)
})
