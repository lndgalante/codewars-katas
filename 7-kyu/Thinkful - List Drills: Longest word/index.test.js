const longest = require('.')

test('Test 1', () => {
  expect(longest(['simple', 'is', 'better', 'than', 'complex'])).toBe(7)
})

test('Test 2', () => {
  expect(longest(['explicit', 'is', 'better', 'than', 'implicit'])).toBe(8)
})

test('Test 3', () => {
  expect(longest(['beautiful', 'is', 'better', 'than', 'ugly'])).toBe(9)
})
