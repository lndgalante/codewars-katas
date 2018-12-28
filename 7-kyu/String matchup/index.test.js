const solve = require('.')

test('Test 1', () => {
  expect(solve(['abc', 'abc', 'xyz', 'abcd', 'cde'], ['abc', 'cde', 'uap'])).toEqual([2, 1, 0])
})

test('Test 2', () => {
  expect(solve(['abc', 'xyz', 'abc', 'xyz', 'cde'], ['abc', 'cde', 'xyz'])).toEqual([2, 1, 2])
})

test('Test 3', () => {
  expect(solve(['quick', 'brown', 'fox', 'is', 'quick'], ['quick', 'abc', 'fox'])).toEqual([2, 0, 1])
})
