const movie = require('.')

test('Test 1', () => {
  expect(movie(500, 15, 0.9)).toBe(43)
})

test('Test 2', () => {
  expect(movie(100, 10, 0.95)).toBe(24)
})
