const potatoes = require('.')

test('Test 1', () => {
  expect(potatoes(99, 100, 98)).toBe(50)
})

test('Test 2', () => {
  expect(potatoes(82, 127, 80)).toBe(114)
})

test('Test 3', () => {
  expect(potatoes(93, 129, 91)).toBe(100)
})
