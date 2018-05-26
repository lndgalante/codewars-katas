const colorOf = require('.')

test('Test 1', () => {
  expect(colorOf(255, 0, 0)).toBe('#ff0000')
})

test('Test 2', () => {
  expect(colorOf(0, 111, 0)).toBe('#006f00')
})

test('Test 3', () => {
  expect(colorOf(1, 2, 3)).toBe('#010203')
})
