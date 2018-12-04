const pattern = require('.')

test('Test 1', () => {
  expect(pattern(1)).toBe('1')
})

test('Test 2', () => {
  expect(pattern(2)).toBe('12\n2')
})

test('Test 3', () => {
  expect(pattern(5)).toBe('12345\n2345\n345\n45\n5')
})
