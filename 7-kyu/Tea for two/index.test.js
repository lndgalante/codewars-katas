const tea42 = require('.')

test('Test 1', () => {
  expect(tea42(2)).toBe('t')
})

test('Test 2', () => {
  expect(tea42('2')).toBe('t')
})

test('Test 3', () => {
  expect(tea42(102)).toBe('10t')
})

test('Test 4', () => {
  expect(tea42('m2')).toBe('mt')
})

test('Test 5', () => {
  expect(tea42('pre2ty')).toBe('pretty')
})
