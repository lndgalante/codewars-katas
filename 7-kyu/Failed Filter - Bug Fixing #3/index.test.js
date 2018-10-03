const filterNumbers = require('.')

test('Test 1', () => {
  expect(filterNumbers('test123')).toBe('test')
})

test('Test 2', () => {
  expect(filterNumbers('a1b2c3')).toBe('abc')
})

test('Test 3', () => {
  expect(filterNumbers('aa1bb2cc3dd')).toBe('aabbccdd')
})
