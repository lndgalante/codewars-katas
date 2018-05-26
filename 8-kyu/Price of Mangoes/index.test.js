const mango = require('.')

test('Test 1', () => {
  expect(mango(3, 3)).toBe(6)
})

test('Test 2', () => {
  expect(mango(9, 5)).toBe(30)
})
