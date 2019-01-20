const sumNested = require('.')

test('Test 1', () => {
  expect(sumNested([[[[], [], [[[[[[[[[[]]]]]]]]]]], [], [], [[[], [[]]]]], []])).toBe(0)
})

test('Test 2', () => {
  expect(sumNested([1])).toBe(1)
})

test('Test 3', () => {
  expect(sumNested([1, 2, 3, 4])).toBe(10)
})

test('Test 5', () => {
  expect(sumNested([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(55)
})

test('Test 6', () => {
  expect(sumNested([])).toBe(0)
})

test('Test 7', () => {
  expect(sumNested([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(55)
})

test('Test 8', () => {
  expect(sumNested([[1], []])).toBe(1)
})

test('Test 9', () => {
  expect(sumNested([[1, 2, 3, 4]])).toBe(10)
})
