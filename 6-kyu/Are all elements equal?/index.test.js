const eqAll = require('.')

test('Test 1', () => {
  expect(eqAll('aaa')).toBeTrue()
})

test('Test 2', () => {
  expect(eqAll('abc')).toBeFalse()
})

test('Test 3', () => {
  expect(eqAll('')).toBeTrue()
})

test('Test 4', () => {
  expect(eqAll([0, 0, 0])).toBeTrue()
})

test('Test 5', () => {
  expect(eqAll([0, 1, 2])).toBeFalse()
})

test('Test 6', () => {
  expect(eqAll([])).toBeTrue()
})

test('Test 7', () => {
  const set1 = new Set(['7', '6', '8', '9', '3', '2'])
  expect(eqAll(set1)).toBeFalse()
})

test('Test 8', () => {
  const set2 = new Set([1, 1, 1])
  expect(eqAll(set2)).toBeTrue()
})

test('Test 9', () => {
  const set3 = new Set()
  expect(eqAll(set3)).toBeTrue()
})
