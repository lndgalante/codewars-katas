const move = require('.')

test('Test 1', () => {
  expect(move(0, 4)).toBe(8)
})

test('Test 2', () => {
  expect(move(3, 6)).toBe(15)
})

test('Test 3', () => {
  expect(move(2, 5)).toBe(12)
})
