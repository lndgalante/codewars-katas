const remove = require('.')

test('Test 1', () => {
  expect(remove('Hi!')).toBe('Hi')
})

test('Test 2', () => {
  expect(remove('Hi!!!')).toBe('Hi')
})

test('Test 3', () => {
  expect(remove('!Hi')).toBe('!Hi')
})

test('Test 4', () => {
  expect(remove('!Hi!')).toBe('!Hi')
})

test('Test 5', () => {
  expect(remove('Hi! Hi!')).toBe('Hi! Hi')
})

test('Test 6', () => {
  expect(remove('Hi')).toBe('Hi')
})
