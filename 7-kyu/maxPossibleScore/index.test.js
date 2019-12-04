const maxPossibleScore = require('.')

test('Test 1', () => {
  expect(maxPossibleScore({ a: 1 }, [])).toBe(1)
})

test('Test 2', () => {
  expect(maxPossibleScore({ a: 1 }, ['a'])).toBe(2)
})

test('Test 3', () => {
  expect(maxPossibleScore({ a: 1, b: 14 }, ['b'])).toBe(29)
})

test('Test 4', () => {
  expect(maxPossibleScore({ a: 1, b: 2, c: 4 }, ['a', 'b', 'c'])).toBe(14)
})

test('Test 5', () => {
  expect(maxPossibleScore({ a: 2, b: 5, c: 8 }, ['c'])).toBe(23)
})
