const filterString = require('.')

test('Test 1', () => {
  expect(filterString('123')).toBe(123)
})

test('Test 2', () => {
  expect(filterString('a1b2c3')).toBe(123)
})

test('Test 3', () => {
  expect(filterString('aa1bb2cc3dd')).toBe(123)
})
