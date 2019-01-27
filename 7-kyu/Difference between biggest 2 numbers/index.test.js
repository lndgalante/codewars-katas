const diffBig2 = require('.')

test('Test 1', () => {
  expect(diffBig2([2, 1])).toBe(1)
})

test('Test 2', () => {
  expect(diffBig2([8, 3, 1])).toBe(5)
})

test('Test 3', () => {
  expect(diffBig2([1, 8, 3])).toBe(5)
})
