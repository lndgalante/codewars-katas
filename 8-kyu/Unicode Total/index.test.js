const uniTotal = require('.')

test('Test 1', () => {
  expect(uniTotal('')).toBe(0)
})

test('Test 2', () => {
  expect(uniTotal('a')).toBe(97)
})

test('Test 3', () => {
  expect(uniTotal('b')).toBe(98)
})

test('Test 4', () => {
  expect(uniTotal('c')).toBe(99)
})

test('Test 5', () => {
  expect(uniTotal('d')).toBe(100)
})

test('Test 6', () => {
  expect(uniTotal('e')).toBe(101)
})

test('Test 7', () => {
  expect(uniTotal('aaa')).toBe(291)
})

test('Test 8', () => {
  expect(uniTotal('Mary Had A Little Lamb')).toBe(1873)
})
