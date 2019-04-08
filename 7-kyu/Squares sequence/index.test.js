const squares = require('.')

test('Test 1', () => {
  expect(squares(2, 5)).toEqual([2, 4, 16, 256, 65536])
})

test('Test 2', () => {
  expect(squares(3, 3)).toEqual([3, 9, 81])
})

test('Test 3', () => {
  expect(squares(5, 3)).toEqual([5, 25, 625])
})

test('Test 4', () => {
  expect(squares(10, 4)).toEqual([10, 100, 10000, 100000000])
})

test('Test 7', () => {
  expect(squares(2, 0)).toEqual([])
})

test('Test 8', () => {
  expect(squares(2, -5)).toEqual([])
})
