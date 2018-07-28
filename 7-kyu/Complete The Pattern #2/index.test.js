const pattern = require('.')

test('Test 1', () => {
  expect(pattern(1)).toBe('1')
})

test('Test 2', () => {
  expect(pattern(2)).toBe('21\n2')
})

test('Test 3', () => {
  expect(pattern(5)).toBe('54321\n5432\n543\n54\n5')
})
