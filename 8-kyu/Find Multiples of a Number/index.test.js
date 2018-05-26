const findMultiples = require('.')

test('Test 1', () => {
  expect(findMultiples(5, 25)).toEqual([5, 10, 15, 20, 25])
})

test('Test 2', () => {
  expect(findMultiples(1, 2)).toEqual([1, 2])
})

test('Test 3', () => {
  expect(findMultiples(5, 7)).toEqual([5])
})

test('Test 4', () => {
  expect(findMultiples(4, 27)).toEqual([4, 8, 12, 16, 20, 24])
})

test('Test 5', () => {
  expect(findMultiples(11, 54)).toEqual([11, 22, 33, 44])
})
