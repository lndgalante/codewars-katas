const replicate = require('.')

test('Test 1', () => {
  expect(replicate(3, 5)).toEqual([5, 5, 5])
})

test('Test 2', () => {
  expect(replicate(5, 1)).toEqual([1, 1, 1, 1, 1])
})

test('Test 3', () => {
  expect(replicate(0, 12)).toEqual([])
})

test('Test 4', () => {
  expect(replicate(-1, 12)).toEqual([])
})
