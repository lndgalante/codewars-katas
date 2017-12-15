const sum_pairs = require('./index.js')

test('Test 1', () => {
  expect(sum_pairs([1, 4, 8, 7, 3, 15], 8)).toEqual([1, 7])
})

test('Test 2', () => {
  expect(sum_pairs([1, -2, 3, 0, -6, 1], -6)).toEqual([0, -6])
})

test('Test 3', () => {
  expect(sum_pairs([20, -13, 40], -7)).toEqual(undefined)
})

test('Test 4', () => {
  expect(sum_pairs([1, 2, 3, 4, 1, 0], 2)).toEqual([1, 1])
})

test('Test 5', () => {
  expect(sum_pairs([10, 5, 2, 3, 7, 5], 10)).toEqual([3, 7])
})

test('Test 6', () => {
  expect(sum_pairs([4, -2, 3, 3, 4], 8)).toEqual([4, 4])
})

test('Test 7', () => {
  expect(sum_pairs([0, 2, 0], 0)).toEqual([0, 0])
})

test('Test 8', () => {
  expect(sum_pairs([5, 9, 13, -3], 10)).toEqual([13, -3])
})
