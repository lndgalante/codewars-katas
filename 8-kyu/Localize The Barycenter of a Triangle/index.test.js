const barTriang = require('.')

test('Test 1', () => {
  expect(barTriang([4, 6], [12, 4], [10, 10])).toEqual([8.6667, 6.6667])
})

test('Test 2', () => {
  expect(barTriang([4, 2], [12, 2], [6, 10])).toEqual([7.3333, 4.6667])
})

test('Test 3', () => {
  expect(barTriang([4, 8], [8, 2], [16, 6])).toEqual([9.3333, 5.3333])
})

test('Test 4', () => {
  expect(barTriang([0, 0], [1, 3], [-1, 6])).toEqual([0, 3])
})

test('Test 5', () => {
  expect(barTriang([0, 0], [1, 6], [8, -6])).toEqual([3, 0])
})
