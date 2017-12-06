const eqAll = require('./index.js')

test('Test 1', () => {
  expect(eqAll('aaa')).toBeTruthy()
})

test('Test 2', () => {
  expect(eqAll('abc')).toBeFalsy()
})

test('Test 3', () => {
  expect(eqAll('')).toBeTruthy()
})

test('Test 4', () => {
  expect(eqAll([0, 0, 0])).toBeTruthy()
})

test('Test 5', () => {
  expect(eqAll([0, 1, 2])).toBeFalsy()
})

test('Test 6', () => {
  expect(eqAll([])).toBeTruthy()
})

test('Test 7', () => {
  const set1 = new Set(['7', '6', '8', '9', '3', '2'])
  expect(eqAll(set1)).toBeFalsy()
})

test('Test 8', () => {
  const set2 = new Set([1, 1, 1])
  expect(eqAll(set2)).toBeTruthy()
})

test('Test 9', () => {
  const set3 = new Set()
  expect(eqAll(set3)).toBeTruthy()
})
