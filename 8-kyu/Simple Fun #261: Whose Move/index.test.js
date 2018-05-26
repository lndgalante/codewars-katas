const whoseMove = require('.')

test('Test 1', () => {
  expect(whoseMove('black', false)).toBe('white')
})

test('Test 2', () => {
  expect(whoseMove('white', true)).toBe('white')
})

test('Test 3', () => {
  expect(whoseMove('white', false)).toBe('black')
})
