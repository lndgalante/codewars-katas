const score = require('.')

test('Test 1', () => {
  expect(score([2, 3, 4, 6, 2])).toBe(0)
})

test('Test 2', () => {
  expect(score([4, 4, 4, 3, 3])).toBe(400)
})

test('Test 3', () => {
  expect(score([2, 4, 4, 5, 4])).toBe(450)
})
