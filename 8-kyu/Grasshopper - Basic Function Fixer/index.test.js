const addFive = require('.')

test('Test 1', () => {
  expect(addFive(5)).toBe(10)
})

test('Test 2', () => {
  expect(addFive(0)).toBe(5)
})

test('Test 3', () => {
  expect(addFive(-5)).toBe(0)
})
