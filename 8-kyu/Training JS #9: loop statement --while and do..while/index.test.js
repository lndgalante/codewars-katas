const padIt = require('.')

test('Test 1', () => {
  expect(padIt('a', 1)).toBe('*a')
})

test('Test 2', () => {
  expect(padIt('a', 2)).toBe('*a*')
})

test('Test 3', () => {
  expect(padIt('a', 3)).toBe('**a*')
})

test('Test 4', () => {
  expect(padIt('a', 4)).toBe('**a**')
})

test('Test 5', () => {
  expect(padIt('a', 5)).toBe('***a**')
})
