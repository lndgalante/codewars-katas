const pattern = require('.')

test('Test 1', () => {
  expect(pattern(1)).toBe('1')
})

test('Test 2', () => {
  expect(pattern(2)).toBe('1\n22')
})

test('Test 3', () => {
  expect(pattern(5)).toBe('1\n22\n333\n4444\n55555')
})
