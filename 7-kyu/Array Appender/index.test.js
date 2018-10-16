const appendArrays = require('.')

test('Test 1', () => {
  expect(appendArrays([1, 2], [2, 4])).toEqual([1, 2, 2, 4])
})

test('Test 2', () => {
  expect(appendArrays([1, 2], [3, 4])).toEqual([1, 2, 3, 4])
})

test('Test 3', () => {
  expect(appendArrays(['this'], ['that'])).toEqual(['this', 'that'])
})

test('Test 4', () => {
  expect(appendArrays(['a', 'B'], ['c', 'D'])).toEqual(['a', 'B', 'c', 'D'])
})

test('Test 5', () => {
  expect(appendArrays([1, 2], [1])).toEqual([1, 2, 1])
})
