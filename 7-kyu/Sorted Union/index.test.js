const uniteUnique = require('.')

test('Test 1', () => {
  expect(uniteUnique([1, 2], [3, 4])).toEqual([1, 2, 3, 4])
})

test('Test 2', () => {
  expect(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])).toEqual([1, 3, 2, 5, 4])
})

test('Test 3', () => {
  expect(uniteUnique([4, 3, 2, 2])).toEqual([4, 3, 2])
})

test('Test 4', () => {
  expect(uniteUnique([4, 'a', 2], [])).toEqual([4, 'a', 2])
})

test('Test 5', () => {
  expect(uniteUnique([], [4, 'a', 2])).toEqual([4, 'a', 2])
})

test('Test 6', () => {
  expect(uniteUnique([], [4, 'a', 2], [])).toEqual([4, 'a', 2])
})

test('Test 7', () => {
  expect(uniteUnique([])).toEqual([])
})

test('Test 8', () => {
  expect(uniteUnique([], [])).toEqual([])
})

test('Test 9', () => {
  expect(uniteUnique([], [1, 2])).toEqual([1, 2])
})

test('Test 10', () => {
  expect(uniteUnique([], [1, 2, 1, 2], [2, 1, 1, 2, 1])).toEqual([1, 2])
})
