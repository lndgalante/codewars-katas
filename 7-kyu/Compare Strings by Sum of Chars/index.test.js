const compare = require('.')

test('Test 1', () => {
  expect(compare('AD', 'BC')).toBeTrue()
})

test('Test 2', () => {
  expect(compare('AD', 'DD')).toBeFalse()
})

test('Test 3', () => {
  expect(compare('gf', 'FG')).toBeTrue()
})

test('Test 4', () => {
  expect(compare('zz1', '')).toBeTrue()
})

test('Test 5', () => {
  expect(compare('ZzZz', 'ffPFF')).toBeTrue()
})

test('Test 6', () => {
  expect(compare('kl', 'lz')).toBeFalse()
})

test('Test 7', () => {
  expect(compare(null, '')).toBeTrue()
})
