const getMiddle = require('./index.js')

test('Test 1', () => {
  expect(getMiddle('test')).toBe('es')
})

test('Test 2', () => {
  expect(getMiddle('testing')).toBe('t')
})

test('Test 3', () => {
  expect(getMiddle('middle')).toBe('dd')
})

test('Test 4', () => {
  expect(getMiddle('A')).toBe('A')
})
