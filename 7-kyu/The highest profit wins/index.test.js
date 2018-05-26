const minMax = require('.')

test('Test 1', () => {
  expect(minMax([1, 2, 3, 4, 5])).toEqual([1, 5])
})

test('Test 2', () => {
  expect(minMax([2334454, 5])).toEqual([5, 2334454])
})

test('Test 3', () => {
  expect(minMax([1])).toEqual([1, 1])
})
