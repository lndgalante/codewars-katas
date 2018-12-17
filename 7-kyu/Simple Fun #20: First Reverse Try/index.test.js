const firstReverseTry = require('.')

test('Test 1', () => {
  expect(firstReverseTry([1, 2, 3, 4, 5])).toEqual([5, 2, 3, 4, 1])
})

test('Test 2', () => {
  expect(firstReverseTry([])).toEqual([])
})

test('Test 3', () => {
  expect(firstReverseTry([111])).toEqual([111])
})

test('Test 4', () => {
  expect(firstReverseTry([23, 54, 12, 3, 4, 56, 23, 12, 5, 324])).toEqual([324, 54, 12, 3, 4, 56, 23, 12, 5, 23])
})

test('Test 5', () => {
  expect(firstReverseTry([-1, 1])).toEqual([1, -1])
})
