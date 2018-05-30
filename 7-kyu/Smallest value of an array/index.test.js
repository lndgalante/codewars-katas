const min = require('.')

test('Test 1', () => {
  expect(min([1, 2, 3, 4, 5], 'value')).toBe(1)
})

test('Test 2', () => {
  expect(min([1, 2, 3, 4, 5], 'index')).toBe(0)
})
