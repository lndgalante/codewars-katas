const hello = require('.')

test('Test 1', () => {
  expect(hello('johN')).toBe('Hello, John!')
})

test('Test 2', () => {
  expect(hello('alice')).toBe('Hello, Alice!')
})

test('Test 3', () => {
  expect(hello()).toBe('Hello, World!')
})
