const riders = require('.')

test('Test 1', () => {
  expect(riders([18, 15])).toBe(1)
})

test('Test 2', () => {
  expect(riders([43, 23, 40, 13])).toBe(2)
})

test('Test 3', () => {
  expect(riders([33, 8, 16, 47, 30, 30, 46])).toBe(3)
})

test('Test 4', () => {
  expect(riders([6, 24, 6, 8, 28, 8, 23, 47, 17, 29, 37, 18, 40, 49])).toBe(4)
})
