const last = require('.')

test('Test 1', () => {
  expect(last([1, 2, 3, 4])).toBe(4)
})

test('Test 2', () => {
  expect(last('xyz')).toBe('z')
})

test('Test 3', () => {
  expect(last(1, 2, 3, 4)).toBe(4)
})

test('Test 4', () => {
  expect(last([1, 2, 3, 4, 5])).toBe(5)
})

test('Test 5', () => {
  expect(last('abcde')).toBe('e')
})

test('Test 6', () => {
  expect(last(1, 'b', 3, 'd', 5)).toBe(5)
})

test('Test 7', () => {
  expect(last('a', 'b', 'c', 'z')).toBe('z')
})
