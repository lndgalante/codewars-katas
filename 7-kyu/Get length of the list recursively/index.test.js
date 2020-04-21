const lengthR = require('.')

test('Test 1', () => {
  expect(lengthR([])).toBe(0)
})

test('Test 2', () => {
  expect(lengthR([1])).toBe(1)
})
