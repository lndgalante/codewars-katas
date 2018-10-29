const reverseIt = require('.')

test('Test 1', () => {
  expect(reverseIt('Hello')).toBe('olleH')
})

test('Test 2', () => {
  expect(reverseIt(314159)).toBe(951413)
})

test('Test 3', () => {
  expect(reverseIt('314159')).toBe('951413')
})

test('Test 4', () => {
  expect(reverseIt([])).toEqual([])
})
