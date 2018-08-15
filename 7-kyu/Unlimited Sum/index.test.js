const sum = require('.')

test('Test 1', () => {
  expect(sum(1, 11, 111)).toBe(123)
})

test('Test 2', () => {
  expect(sum(4, true, 4, 'A', 4, '99')).toBe(12)
})
