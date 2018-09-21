const vectorLength = require('.')

test('Test 1', () => {
  expect(vectorLength([[0, 1], [0, 0]])).toBe(1)
})

test('Test 2', () => {
  expect(vectorLength([[0, 3], [4, 0]])).toBe(5)
})

test('Test 3', () => {
  expect(vectorLength([[1, -1], [1, -1]])).toBe(0)
})
