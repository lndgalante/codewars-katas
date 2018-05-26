const zeros = require('.')

test('Test 1', () => {
  expect(zeros(6)).toBe(1)
})

test('Test 2', () => {
  expect(zeros(12)).toBe(2)
})

test('Test 3', () => {
  expect(zeros(50)).toBe(12)
})
