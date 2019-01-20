const maxRedigit = require('.')

test('Test 1', () => {
  expect(maxRedigit(123)).toBe(321)
})

test('Test 2', () => {
  expect(maxRedigit(-1)).toBeNull()
})

test('Test 3', () => {
  expect(maxRedigit(0)).toBeNull()
})
