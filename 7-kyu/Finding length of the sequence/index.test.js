const lengthOfSequence = require('.')

test('Test 1', () => {
  expect(lengthOfSequence([1, 1], 1)).toBe(2)
})

test('Test 2', () => {
  expect(lengthOfSequence([1, 2, 3, 1], 1)).toBe(4)
})

test('Test 3', () => {
  expect(lengthOfSequence([-7, 5, 0, 2, 9, 5], 5)).toBe(5)
})

test('Test 4', () => {
  expect(lengthOfSequence([-7, 6, 2, -7, 4], -7)).toBe(4)
})
