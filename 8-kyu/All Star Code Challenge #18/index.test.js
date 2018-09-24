const strCount = require('.')

test('Test 1', () => {
  expect(strCount('Hello', 'o')).toBe(1)
})

test('Test 2', () => {
  expect(strCount('Hello', 'l')).toBe(2)
})

test('Test 3', () => {
  expect(strCount('', 'z')).toBe(0)
})
