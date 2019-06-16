const sumTimesTables = require('.')

test('Test 1', () => {
  expect(sumTimesTables([2, 3], 1, 3)).toBe(30)
})

test('Test 2', () => {
  expect(sumTimesTables([1, 3, 5], 1, 1)).toBe(9)
})

test('Test 3', () => {
  expect(sumTimesTables([1, 3, 5], 1, 10)).toBe(495)
})
