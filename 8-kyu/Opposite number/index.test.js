const opposite = require('.')

test('Test 1', () => {
  expect(opposite(1)).toBe(-1)
})

test('Test 2', () => {
  expect(opposite(-2)).toBe(2)
})

test('Test 3', () => {
  expect(opposite(100)).toBe(-100)
})
