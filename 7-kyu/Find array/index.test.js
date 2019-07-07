const findArray = require('.')

test('Test 1', () => {
  expect(findArray(['a', 'a', 'a', 'a', 'a'], [2, 4])).toEqual(['a', 'a'])
})

test('Test 2', () => {
  expect(findArray([0, 1, 5, 2, 1, 8, 9, 1, 5], [1, 4, 7])).toEqual([1, 1, 1])
})

test('Test 3', () => {
  expect(findArray([1, 2, 3, 4, 5], [0])).toEqual([1])
})

test('Test 4', () => {
  expect(findArray([1, 2, 3, 4, 5], [4, 2, 0])).toEqual([5, 3, 1])
})

test('Test 5', () => {
  expect(findArray([1, 2, 3, 4, 5], [2, 2, 2])).toEqual([3, 3, 3])
})

test('Test 6', () => {
  expect(findArray(['this', 'is', 'test'], [0, 1, 2])).toEqual(['this', 'is', 'test'])
})

test('Test 7', () => {
  expect(findArray([1, 2, 3], [])).toEqual([])
})

test('Test 8', () => {
  expect(findArray([], [2, 1, 3])).toEqual([])
})

test('Test 9', () => {
  expect(findArray([], [])).toEqual([])
})
